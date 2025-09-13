import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModele } from './bills/bills.model';
import { PersonsModel } from './persons/persons.model';


@Module({
  imports: [BillModele, PersonsModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
