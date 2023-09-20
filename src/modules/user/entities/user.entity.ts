import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Movement } from "src/modules/movement/entities/movement.entity";
import { Sale } from "src/modules/sale/entities/sale.entity";

@Schema()
export class User {
    
    _id?: string;

    @Prop({ required: true, maxlength: 15 })
    username: string;

    @Prop({ default: '', maxlength: 50})
    name?: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, minlength: 6})
    password?: string;

    @Prop({ required: false, default: '' })
    img: string;

    @Prop({ required: true, default: 0 })
    budget: number;

    @Prop({ required: false, default: [] })
    sales_list: Sale[];

    @Prop({ required: false, default: [] })
    movement_list: Movement[];

    @Prop({ required: true, default: Date.now})
    date_creation: Date;

    @Prop({ required: true, type: [String], default: ['user']})
    role: string[];

    @Prop({ default: true })
    isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User)