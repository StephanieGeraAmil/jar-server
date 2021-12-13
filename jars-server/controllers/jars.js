import JarModel from "../models/JarsModel.js";
export const getJars = async (req,res) =>{
   try{ 
       const jars= await JarModel.find();
       console.log('getting jars');
         console.log(jars);
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
   const updated={...req.body,_id};
   if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
    const updatedJar= await JarModel.findByIdAndUpdate(id,updated,{new:true});
    res.status(204).json(updatedJar);
        
}