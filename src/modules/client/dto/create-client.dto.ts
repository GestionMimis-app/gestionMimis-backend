import { IsArray, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Product } from "src/modules/product/entities/product.entity";
import { Sale } from "src/modules/sale/entities/sale.entity";

export class CreateClientDto {
    _id?: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsArray()
    sales_list: Sale[];

    @IsArray()
    products_list: Product[];

}
