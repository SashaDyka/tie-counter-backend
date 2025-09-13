import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillModele } from './bills/bills.model';

@Module({
  imports: [BillModele],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
