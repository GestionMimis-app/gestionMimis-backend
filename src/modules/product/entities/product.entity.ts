import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    _id?: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    stock: number;

    @Prop({ required: true })
    price: number;

    @Prop({ default: '', required: false })
    img: string;

    @Prop({ required: false })
    sale_id: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
