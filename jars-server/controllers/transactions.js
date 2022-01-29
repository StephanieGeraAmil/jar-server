
import TransactionsModel from "../models/TransactionsModel.js";

export const getTransactions = async (req,res) =>{
   try{ 
       const transactions= await TransactionsModel.find();
       
        res.status(200).json(transactions); 
   }catch(error){
     res.status(404).json({message:error.message});
   }
}
export const createTransactions=async (req,res) =>{
   const trans=req.body;
    const newTransaction= new TransactionsModel(trans);
    
    try { 
        await newTransaction.save();
        res.status(201).json(newTransaction);
   }catch(error){
  res.status(409).json({message:error.message});
   }
}
export const deleteTransaction=async (req,res) =>{
      
   const {id:_id}=req.params;
   
   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message:"invalid id"});
   
     const transaction=await MovementModel.deleteOne({_id:_id});
    res.status(204).json(transaction);
        
}




