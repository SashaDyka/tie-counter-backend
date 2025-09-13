import { Module } from '@nestjs/common';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { PrismaServise } from '../prisma/prisma.service';

@Module({
    imports: [],
    controllers: [BillsController],
    providers: [BillsService, PrismaServise],
})
export class BillModele {}