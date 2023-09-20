import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Product } from "src/modules/product/entities/product.entity";
import { Sale } from "src/modules/sale/entities/sale.entity";

@Schema()
export class Client {
    _id?: string;

    @Prop({ required: true, maxlength: 50 })
    name: string;

    @Prop({ default: '' })
    address: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ default: '' })
    payment_method?: string;

    @Prop({ default: '' })
    payment_status?: string;

    @Prop({ required: false, default: [] })
    sales_list: Sale[]; 

    @Prop({ required: false, default: [] })
    products_list: Product[]; 

    @Prop({ default: true })
    isActive: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client)
