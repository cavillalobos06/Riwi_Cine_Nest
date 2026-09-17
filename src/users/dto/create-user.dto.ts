import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {

    @ApiProperty({example: 'riwicine@example.com', description: "user's email address" })
    @IsEmail({}, {message: 'Invalid Format Email, must contain "@" and ".com"'})
    @IsNotEmpty({message: 'Email cannot be empty; please enter a value'})
    email: string;

    @ApiProperty({example: 'riwicine@example.com', description: 'Email Address Confirmation'})
    @IsEmail({}, {message: 'Invalid Format Email, must contain "@" and ".com"'})
    @IsNotEmpty({message: 'confirmEmail cannot be empty; please enter a value'})
    confirmEmail: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {message: 'Password must be at least 6 characters'})
    @Transform(({value}) => value.trim())
    password: string;

    @IsString()
    @IsNotEmpty({message: 'confirmPassword cannot be empty; please enter a value'})
    @Transform(({value}) => value.trim())
    confirmPassword: string

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    documentType: string;

    @IsString()
    @IsNotEmpty()
    documentNumber: string;

    @IsString()
    @IsNotEmpty()
    birthDate: string;

    @IsString()
    gender?: string

    @IsNumber()
    @IsNotEmpty()
    cityId: number;

    @IsNumber()
    favoriteCinemaId?: number;

    @IsBoolean()
    @Transform(({value}) => value === 'true' || value === true)
    @IsNotEmpty()
    personalDataConsent: boolean;

    @IsBoolean()
    @Transform(({value}) => value === 'true' || value === true)
    @IsNotEmpty()
    termsConsent: boolean;

    @IsBoolean()
    @Transform(({value}) => value === 'true' || value === true)
    commercialConsent?: boolean;
}
