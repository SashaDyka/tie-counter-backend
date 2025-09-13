import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsServise } from './persons.service';
import { PrismaServise } from '../prisma/prisma.service';

@Module({
    imports: [],
    controllers: [PersonsController],
    providers: [PersonsServise, PrismaServise],
})
export class PersonsModel {}