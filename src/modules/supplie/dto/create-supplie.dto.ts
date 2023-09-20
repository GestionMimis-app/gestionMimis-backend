import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsMongoId } from "class-validator";

export class CreateSupplieDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsMongoId() // Para validar que sale_id es un ID válido de MongoDB (puedes personalizar esta validación según tus necesidades)
    sale_id: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
