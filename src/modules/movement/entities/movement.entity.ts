import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Movement {
    _id?: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    date_movement: Date;

    @Prop({ required: true })
    user_id: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);
