
import MovementModel from "../models/MovementModel.js";
import mongoose from 'mongoose';
export const getMovements = async (req,res) =>{
   try{ 
       const movements= await MovementModel.find();
       
        res.status(200).json(movements); 
   }catch(error){
     res.status(404).json({message:error.message});
   }
}
export const createMovements=async (req,res) =>{
   const mov=req.body;
    const newMovement= new MovementModel(mov);
    
    try { 
        await newMovement.save();
        res.status(201).json(newMovement);
   }catch(error){
  res.status(409).json({message:error.message});
   }
}

export const updateMovements=async (req,res) =>{
 const {id:_id}=req.params;
   const updated=req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
   try { 
        const updatedMovement= await MovementModel.findByIdAndUpdate(_id,updated,{new:true});
        res.status(204).json(updatedMovement);
   }catch(error){
         res.status(409).json({message:error.message});
   }


        
}
export const deleteMovements=async (req,res) =>{
      
   const {id:_id}=req.params;
   
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   try {
     const movement=await MovementModel.deleteOne({_id:_id});
    res.status(204).json(movement);
   }catch(error){
         res.status(409).json({message:error.message});
   }
        
}

