import { IsNumber, IsInt, IsOptional, IsString, IsArray } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  individualTipPercentage?: number;

  @IsOptional()
  @IsNumber()
  individualAmount?: number;
}

export class CreateBillDto {
  @IsNumber()
  totalAmount: number;

  @IsInt()
  defaultTipPercentage: number;

  @IsArray()
  people: CreateParticipantDto[];
}