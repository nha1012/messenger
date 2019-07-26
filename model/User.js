import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
  userName : String,
  gender: {type:String, default:"NAM"},
  phone: {type:String,default:null},
  address: {type:String,default:null},
  avatar: {type:String,default:"avatar.jpg"},
  role:{type:String,default:"user"},
  local:{email:String,password:String,isactive:{type:Boolean,default:false},verifytoken:String},
  facebook:{uid:String,token:String,email:{type:String,trim:true}},
  google:{uid:String,token:String,email:{type:String,trim:true}},
  createdAt:{type:Number,default:Date.now},
  updateAt:{type:Number,default:null},
  deleteAt:{type:Number,default:null},
})
module.exports = mongoose.model("user", userSchema);