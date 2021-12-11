
import JarModel from "../models/JarsModel.js";
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