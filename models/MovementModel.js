import mongoose from 'mongoose';

const movementSchema= mongoose.Schema(
    {
       concept: {type:String, required:true},
       amount:  {type:Number, default:0},
       jar: {type:Array, required:true},
       date:{type:Date, default:new Date()}
    }
)

const MovementModel= mongoose.model("MovementModel", movementSchema);
export default MovementModel;