import JarModel from "../models/JarsModel.js";
import mongoose from 'mongoose';
export const getJars = async (req,res) =>{
   try{ 
       const jars= await JarModel.find();
      
        res.status(200).json(jars); 
   }catch(error){
     res.status(404).json({message:error.message});
   }
}
export const createJars=async (req,res) =>{
   const jr=req.body;
   const newJar= new JarModel(jr);
    
    try { 
        await newJar.save();
       
        res.status(201).json(newJar);
   }catch(error){
  res.status(409).json({message:error.message});
   }
}
export const updateJar=async (req,res) =>{
   const {id:_id}=req.params;
   const updated=req.body;
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
   
  try{
    const updatedJar= await JarModel.findByIdAndUpdate(_id,updated,{new:true});
    res.status(204).json(updatedJar);
   }catch(error){
   res.status(409).json({message:error.message});
   }
}

export const deleteJar=async (req,res) =>{
   const {id:_id}=req.params;
 
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
   try{
    const deleteJar= await JarModel.deleteOne({ _id:_id });
    res.status(204).json(deleteJar);
   }catch(error){
      res.status(409).json({message:error.message});
   }
        
}

