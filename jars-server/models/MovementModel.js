import mongoose from 'mongoose';

const movementSchema= mongoose.Schema(
    {
       concept: {type:String, required:true},
       is_income: {type:Boolean, required:true},
       amount:  {type:Number, default:0},
       jar: {type:String, required:true},
       date:{type:Date, default:new Date()}
    }
)

const MovementModel= mongoose.model("MovementModel", movementSchema);
export default MovementModel;