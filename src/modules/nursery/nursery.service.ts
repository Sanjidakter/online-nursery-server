import { TNursery } from "./nursery.interface";
import { Nursery } from "./nursery.model";

const createNursery = async (payload: TNursery) => {
  const result = await Nursery.create(payload);
  return result;
};

const getAllNurseries = async () => {
  const result = await Nursery.find();
  return result;
};

const getNuseryById = async (id: string) => {
  const result = await Nursery.findById(id);
  return result;
};

const updateNursery = async(id:string,updateData:Partial<TNursery>)=>{
const result = await Nursery.findByIdAndUpdate(id,updateData,{new:true});
return result;
}

const deleteNursery = async (id: string) => {
  const result = await Nursery.findByIdAndDelete(id);
  return result;
};
export const NurseryServices = {
  createNursery,
  getAllNurseries,
  getNuseryById,
  updateNursery,
  deleteNursery
};
