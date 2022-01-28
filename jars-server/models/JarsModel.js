import mongoose from 'mongoose';

const jarSchema= mongoose.Schema(
    {
        name: {type:String, required:true},
        percentage:  {type:Number, default:0},
        balance:  {type:Number, default:0},
        date:{type:Date, default:new Date()},
     
    }
)

const JarModel= mongoose.model("JarModel",jarSchema);
export default JarModel;