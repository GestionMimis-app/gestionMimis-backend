import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class RegisterUserDto {
    _id?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    password: string;
}
