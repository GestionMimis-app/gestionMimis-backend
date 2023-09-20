import { IsNotEmpty, IsString, IsNumber, IsDate, IsBoolean, IsMongoId } from "class-validator";

export class CreateMovementDto {
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsDate()
    date_movement: Date;

    @IsNotEmpty()
    @IsMongoId() 
    user_id: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
