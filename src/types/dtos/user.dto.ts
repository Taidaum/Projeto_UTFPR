import {
  IsEmail,
  IsLowercase,
  IsOptional,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsEmail()
  @IsLowercase()
  email?: string;

  @IsOptional()
  @Length(2, 50)
  phone?: string;

  @IsOptional()
  isActive?: boolean;
}
