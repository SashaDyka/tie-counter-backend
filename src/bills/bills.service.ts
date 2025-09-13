import { Injectable } from '@nestjs/common';
import { PrismaServise } from '../prisma/prisma.service';

@Injectable() 
export class BillsService{
    constructor(private prisma: PrismaServise){}

    async findAll(){
        return this.prisma.bill.findMany({
            include: {
                people: true,
            },
        });
    }

}