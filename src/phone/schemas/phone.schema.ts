import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Phone extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    stock: number;
}


export const PhoneSchema = SchemaFactory.createForClass(Phone);