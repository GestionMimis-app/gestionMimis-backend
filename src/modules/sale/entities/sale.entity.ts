import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Client } from "src/modules/client/entities/client.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Supplie } from "src/modules/supplie/entities/supplie.entity";

@Schema()
export class Sale {
    _id?: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, type: [String] }) // La propiedad products_list es un arreglo de strings que contiene IDs de productos
    products_list: Product[];

    @Prop({ required: true, type: [String] }) // La propiedad supplies_list es un arreglo de strings que contiene IDs de insumos
    supplies_list: Supplie[];

    @Prop({ required: true, type: [String] }) // La propiedad clients_list es un arreglo de strings que contiene IDs de clientes
    clients_list: Client[];

    @Prop({ required: true, default: Date.now }) // La propiedad date_creation se establece en la fecha actual por defecto
    date_creation: Date;

    @Prop({ required: true })
    user_id: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
