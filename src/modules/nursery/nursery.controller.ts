import { Request, Response } from "express";
import { NurseryServices } from "./nursery.service";

const createNursery = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await NurseryServices.createNursery(movieData);

  res.json({
    success: true,
    message: "Product is created successfully !",
    data: result,
  });
};

const getAllNurseries = async (req: Request, res: Response) => {
  try {
    const result = await NurseryServices.getAllNurseries();

    res.status(200).json({
      success: true,
      message: "Products are fetched successfully !",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Nursery Product!",
      error: err,
    });
  }
};
const getNuseryById = async (req: Request, res: Response) => {
  try {
    const { nurseryId } = req.params;
    const result = await NurseryServices.getNuseryById(nurseryId);

    res.status(200).json({
      success: true,
      message: "Product is fetched successfully !",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Nursery Product!",
      error: err,
    });
  }
};

const updateNursery = async (req: Request, res: Response) => {
  try {
    const { nurseryId } = req.params;
    const updateData = req.body;
    const result = await NurseryServices.updateNursery(nurseryId, updateData);

    res.status(200).json({
      success: true,
      message: "Product is updated successfully !",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Updation Failed!",
      error: err,
    });
  }
};

const deleteNursery = async (req: Request, res: Response) => {
  try {
    const { nurseryId } = req.params;
    const result = await NurseryServices.deleteNursery(nurseryId);

    res.status(200).json({
      success: true,
      message: "Product is deleted !",
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: "Could not delete Product!",
      error: err,
    });
  }
};
export const NurseryControllers = {
  createNursery,
  getAllNurseries,
  getNuseryById,
  updateNursery,
  deleteNursery,
};
