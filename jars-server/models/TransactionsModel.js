import mongoose from 'mongoose';

const transactionSchema= mongoose.Schema(
    {
        origin: {type:Object, required:true},
        destination:  {type:Object, required:true},
        amount:  {type:Number, default:0},
        date:{type:Date, default:new Date()},
     
    }
)

const TransactionModel= mongoose.model("TransactionModel",transactionSchema);
export default TransactionModel;