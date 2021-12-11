import mongoose from 'mongoose';

const jarSchema= mongoose.Schema(
    {
       name: {type:String, required:true},
       budget:  {type:Number, default:0},
  
       created_date:{type:Date, default:new Date()},
       deleted_date:{type:Date}
    }
)

const JarModel= mongoose.model("JarModel",jarSchema);
export default JarModel;