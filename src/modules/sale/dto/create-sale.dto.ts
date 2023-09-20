import { IsNotEmpty, IsString, IsArray, IsDate, IsBoolean, IsMongoId } from "class-validator";
import { Client } from "src/modules/client/entities/client.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Supplie } from "src/modules/supplie/entities/supplie.entity";

export class CreateSaleDto {
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsArray()
    products_list: Product[];

    @IsNotEmpty()
    @IsArray()
    supplies_list: Supplie[];

    @IsNotEmpty()
    @IsArray()
    clients_list: Client[];

    @IsDate()
    date_creation: Date;

    @IsNotEmpty()
    @IsMongoId() // Para validar que user_id es un ID válido de MongoDB (puedes personalizar esta validación según tus necesidades)
    user_id: string;

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}
