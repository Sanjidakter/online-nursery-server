import { Model } from "mongoose";

export type TNursery = {
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  stock: number;
};

export type TNurseryModel = Model<TNursery>;