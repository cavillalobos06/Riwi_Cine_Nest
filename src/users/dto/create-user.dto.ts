import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    example: "riwicine@example.com",
    description: "user's email address",
  })
  @IsEmail({}, { message: 'Invalid Format Email, must contain "@" and ".com"' })
  @IsNotEmpty({ message: "Email cannot be empty; please enter a value" })
  email: string;

  @ApiProperty({
    example: "riwicine@example.com",
    description: "Email Address Confirmation",
  })
  @IsEmail({}, { message: 'Invalid Format Email, must contain "@" and ".com"' })
  @IsNotEmpty({ message: "confirmEmail cannot be empty; please enter a value" })
  confirmEmail: string;

  @ApiProperty({ example: "Cine1234*", description: "Contraseña segura" })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: "Password must be at least 6 characters" })
  @Transform(({ value }) => value?.trim())
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: "confirmPassword cannot be empty; please enter a value",
  })
  @Transform(({ value }) => value?.trim())
  confirmPassword: string;

  @ApiProperty({
    example: "+573001234567",
    description: "Número de teléfono de contacto",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: "John", description: "Primer nombre" })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: "Doe", description: "Apellidos" })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: "CC",
    description: "Tipo de documento (CC, CE, Pasaporte)",
  })
  @IsString()
  @IsNotEmpty()
  documentType: string;

  @ApiProperty({
    example: "1020304050",
    description: "Número de documento de identidad",
  })
  @IsString()
  @IsNotEmpty()
  documentNumber: string;

  @ApiProperty({
    example: "1995-05-12",
    description: "Fecha de nacimiento (YYYY-MM-DD)",
  })
  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({
    example: "Masculino",
    description: "Género del usuario",
    required: false,
  })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: 1, description: "ID de la ciudad de residencia" })
  @IsNumber()
  @IsNotEmpty()
  cityId: number;

  @ApiProperty({
    example: 3,
    description: "ID del múltiplex de cine favorito",
    required: false,
  })
  @IsNumber()
  @IsOptional()
  favoriteCinemaId?: number;

  @ApiProperty({
    example: true,
    description: "Consentimiento para el tratamiento de datos personales",
  })
  @IsBoolean()
  @Transform(({ value }) => value === "true" || value === true)
  @IsNotEmpty()
  personalDataConsent: boolean;

  @ApiProperty({
    example: true,
    description: "Aceptación de términos y condiciones de la plataforma",
  })
  @IsBoolean()
  @Transform(({ value }) => value === "true" || value === true)
  @IsNotEmpty()
  termsConsent: boolean;

  @ApiProperty({
    example: true,
    description: "Consentimiento para recibir correos comerciales/promociones",
    required: false,
  })
  @IsBoolean()
  @Transform(({ value }) => value === "true" || value === true)
  @IsOptional()
  commercialConsent?: boolean;
}
