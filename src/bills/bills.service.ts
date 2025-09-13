import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaServise } from '../prisma/prisma.service';
import { Bill, Person } from '../../generated/prisma';
import { CreateBillDto } from '../dto/create-bill.dto';


@Injectable() 
export class BillsService{
    constructor(private prisma: PrismaServise){}

    //TODO: create calculateBillResults method

    async createBill(data: CreateBillDto){
        this.validateBillData(data);

        const prismaData = {
            totalAmount: data.totalAmount,
            defaultTipPercentage: data.defaultTipPercentage,
            people: {
                create: data.people,
            },
        }

        return this.prisma.bill.create({data: prismaData});
    }


    private validateBillData(data: CreateBillDto){
        const {totalAmount, defaultTipPercentage, people} = data;
        if(totalAmount <= 0){
            throw new BadRequestException('Total amount must be a positive number.');
        }
         
        let totalIndividualAmount = 0;
        for (const person of people) {
            if (person.individualAmount) {
                totalIndividualAmount += person.individualAmount;
            }
        }

        if (totalIndividualAmount > totalAmount) {
        throw new BadRequestException('The sum of individual payments cannot exceed the total amount of the bill.');
        }

    }
    

    async findAll(){
        return this.prisma.bill.findMany({
            include: {
                people: true,
            },
        });
    }

    async findOne(id: number){
        const bill = await this.prisma.bill.findUnique({
            where: { id },
            include: { people: true },
        });

        if (!bill) {
            throw new NotFoundException(`Bill with ID ${id} not found.`);
        }

        return this.calculateBillResults(bill);
    }

    async update(id: number, data: any){

    }

    async remove(id: number){

    }


    private calculateBillResults(bill: Bill & { people: Person[] }){
        const { totalAmount, defaultTipPercentage, people } = bill;
        
        const calculatedTip = totalAmount * (defaultTipPercentage / 100);
        const finalAmount = totalAmount + calculatedTip;

        const peopleWithPayments = people.map(person => {
            let amountToPay = 0;
            
            if (person.individualAmount) {
                amountToPay = person.individualAmount;
            } 
            else if (person.individualTipPercentage) {
                const individualTip = totalAmount * (person.individualTipPercentage / 100);
                amountToPay = totalAmount / people.length + individualTip;
            } 
            else {
                amountToPay = finalAmount / people.length;
            }

            return {
                ...person,
                amountToPay,
            };
        });

        return {
            ...bill,
            calculatedTip,
            finalAmount,
            people: peopleWithPayments,
        };

    }

}