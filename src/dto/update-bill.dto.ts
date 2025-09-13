import { IsNumber, IsInt, IsOptional, IsString, IsArray } from 'class-validator';
import { CreateParticipantDto } from './create-bill.dto'; 

export class UpdateBillDto {
  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @IsOptional()
  @IsInt()
  defaultTipPercentage?: number;

  @IsOptional()
  @IsArray()
  people?: CreateParticipantDto[]; 
}