import { Model, Schema } from "mongoose";

export type TOrder = {
    customerName: string;
    phoneNumber: string;
    address: string;
    items: {
      product: Schema.Types.ObjectId;
      quantity: number;
    }[];
    paymentMethod: string;
    totalAmount: number;
    status: string;
};

export type TOrderModel = Model<TOrder>;