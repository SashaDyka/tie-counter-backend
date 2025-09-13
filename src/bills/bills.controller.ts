import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController{
    constructor(private readonly billsService: BillsService) {}

    @Post()
    create(@Body() createBillDto: any){
        return this.billsService.createBill(createBillDto); //TODO: create Bill DTO
    }

    @Get()
    findAll(){
        return this.billsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.billsService.findOne(+id);
    }    


    @Patch()
    update(){
        return 
    }

    @Delete()
    remove(){
        return
    }


}