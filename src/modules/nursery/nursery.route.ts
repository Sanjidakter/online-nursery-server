import express from "express";
import { NurseryControllers } from "./nursery.controller";

const router = express.Router();

router.post("/",NurseryControllers.createNursery);
router.get("/",NurseryControllers.getAllNurseries);
router.get("/:nurseryId",NurseryControllers.getNuseryById);
router.put("/:nurseryId",NurseryControllers.updateNursery);
router.delete("/:nurseryId",NurseryControllers.deleteNursery);

export const NurseryRoutes = router;