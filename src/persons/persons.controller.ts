import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { PersonsServise } from './persons.service';

@Controller('persons')
export class PersonsController{
    constructor(private readonly personsServise: PersonsServise){}
    
    @Get()
    findAll(){
        return this.personsServise.findAll();
    }
}