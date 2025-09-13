import { IsNumber, IsInt, IsOptional, IsString, IsArray } from 'class-validator';
import { CreateParticipantDto } from './create-bill.dto';
import { UpdateParticipantDto } from './update-participant.dto';


export class UpdateBillDto {
  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @IsOptional()
  @IsInt()
  defaultTipPercentage?: number;

  @IsOptional()
  @IsArray()
  peopleToAdd?: CreateParticipantDto[];

  @IsOptional()
  @IsArray()
  peopleToUpdate?: UpdateParticipantDto[]; 

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  peopleToRemove?: number[];
}