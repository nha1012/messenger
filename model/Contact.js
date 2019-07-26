import mongoose from 'mongoose'
let contactSchema = new mongoose.Schema({
  userId:String,
  contactId:String,
  status:{type:Boolean,default:false},
  createdAt:{type:Number,default:Date.now},
  updatedAt:{type:Number,default:null},
  deletedAt:{type:Number,default:null},
}) 
module.exports = mongoose.model('contact', contactSchema);