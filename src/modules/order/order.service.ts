// src/services/order.service.ts

import { Order } from "./order.model";


const createOrder = async (orderData: any) => {
  try {
    const order = new Order(orderData);
    await order.save();
    return order;
  } catch (err) {
    throw new Error('Order creation failed');
  }
};

export const OrderServices = {
  createOrder,
};
