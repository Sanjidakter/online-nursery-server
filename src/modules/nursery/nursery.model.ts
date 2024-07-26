import { model, Schema } from "mongoose";
import { TNursery, TNurseryModel } from "./nursery.interface";

const nurserySchema = new Schema<TNursery>({
    category: {
        type: String,
        required: [true, "Category is required"],
      },
      title: {
        type: String,
        required: [true, "Title is required"],
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: [true, "Description is required"],
      },
      rating: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      stock: {
        type: Number,
        required: true
      }
})

export const Nursery = model<TNursery,TNurseryModel>("Nursery",nurserySchema);