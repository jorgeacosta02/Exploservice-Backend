import { Request, Response } from "express";
import { InventoryModel } from "../models/inventoryModel";

export const getAllInventoryController = async (req:Request, res:Response) =>{
    try {
        const inventory = await InventoryModel.findAll();
        if(!inventory) return res.status(404).json({msg:"No inventory found"});
        else return res.status(200).json(inventory);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
      }
}

