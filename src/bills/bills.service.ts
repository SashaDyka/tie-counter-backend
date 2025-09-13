import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaServise } from '../prisma/prisma.service';
import { CreateBillDto } from '../dto/create-bill.dto';


@Injectable() 
export class BillsService{
    constructor(private prisma: PrismaServise){}

    //TODO: create calculateBillResults method

    async createBill(data: CreateBillDto){
        const {totalAmount, defaultTipPercentage, people} = data;
        if(totalAmount <= 0){
            throw new BadRequestException('Total amount must be a positive number.');
        }
        const totalIndividualAmount = people
            .filter(p => p.individualAmount !== undefined && p.individualAmount !== null)
            .reduce((sum, p) => sum + p.individualAmount, 0);

        if (totalIndividualAmount > totalAmount) {
            throw new BadRequestException('The sum of individual payments cannot exceed the total amount.');
        }

        const prismaData = {
            totalAmount,
            defaultTipPercentage,
            people: {
                create: people,
            },
        };
        
        return this.prisma.bill.create({data: prismaData});
    }


    

    async findAll(){
        return this.prisma.bill.findMany({
            include: {
                people: true,
            },
        });
    }

    async findOne(id: number){

    }

    async update(id: number, data: any){

    }

    async remove(id: number){

    }

}