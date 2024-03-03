import { Request, Response } from "express";
import { LocationModel } from "../models/locationModel";

export const getAllLocationsController = async (req:Request, res:Response) =>{
    try {
        const allLocations = await LocationModel.findAll();
        if(!allLocations) return res.status(404).json({msg:"No locations found"});
        else return res.status(200).json(allLocations);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
      }
}

