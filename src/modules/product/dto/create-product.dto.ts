import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsMongoId } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsString()
    img: string;

    @IsMongoId() // Para validar que sale_id es un ID válido de MongoDB (puedes personalizar esta validación según tus necesidades)
    sale_id: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
