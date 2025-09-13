import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateParticipantDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  individualTipPercentage?: number;

  @IsOptional()
  @IsNumber()
  individualAmount?: number;
}