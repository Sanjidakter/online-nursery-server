// src/controllers/order.controller.ts
import { Request, Response } from 'express';
import { Order } from './order.model';


const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerName, phoneNumber, address, items, totalAmount, paymentMethod } = req.body;

    // Validate required fields
    const requiredFields = ['customerName', 'phoneNumber', 'address', 'items', 'totalAmount', 'paymentMethod'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          success: false,
          message: `Missing required field: ${field}`,
        });
      }
    }

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Items array is required and cannot be empty',
      });
    }

    // Create the order
    const order = new Order({
      customerName,
      phoneNumber,
      address,
      items,
      totalAmount,
      paymentMethod
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: order,
    });
  } catch (err) {
    console.error('Error creating order:', err); // Log the error
    res.status(500).json({
      success: false,
      message: 'Could not create order!',
      error: err.message || 'An unknown error occurred',
    });
  }
};

export const OrderControllers = {
  createOrder,
};
