import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController{
    constructor(private readonly billsService: BillsService) {}

    @Get()
    findAll(){
        return this.billsService.findAll();
    }


}