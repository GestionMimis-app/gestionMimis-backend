import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Supplie {
    _id?: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    sale_id: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const SupplieSchema = SchemaFactory.createForClass(Supplie);
