
import MovementModel from "../models/MovementModel.js";
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
   if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
    const updatedMovement= await MovementModel.findByIdAndUpdate(id,updated,{new:true});
    res.status(204).json(updatedMovement);
        
}

