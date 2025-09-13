import { Injectable } from '@nestjs/common';
import { PrismaServise } from '../prisma/prisma.service';

@Injectable() 
export class BillsService{
    constructor(private prisma: PrismaServise){}

    //TODO: create calculateBillResults method

    async createBill(data: any){

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