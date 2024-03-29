import multer from 'multer'
import fs from 'fs'
import addNewImage from '../services/addNewMessageImage'
import contactModel from '../model/Contact'
import groupModel from '../model/ChatGroup'
let storageMessageImage = multer.diskStorage({
  destination : (req,file,callback)=>{
    callback(null,'./public/images/chat')
  },
  filename:(req,file,callback)=>{
    let math=['image/jpg','image/png','image/jpeg']
    if(math.indexOf(file.mimetype)===-1){
      alertify.error('Kieu file khong hop le (jpg,png)',7)
      return callback('Kieu file khong hop le (jpg,png)',null)
    }
    let nameImage = `${file.originalname}`
    callback(null,nameImage)
  }
}) 
let imageMessageUpload = multer({
  storage: storageMessageImage,
  limits: {fileSize: 1048576}
}).single('my-image-chat')
let addNewMessagesImage =async (req,res)=>{
  await imageMessageUpload( req,res,async(err)=>{
    if (err) {
      console.log(err);
      
      return res.status(500).send(err)
    }
     let messageImage =await addNewImage(req,res)
    try {
      if(req.body.isGroup=="true"){
        await groupModel.afterAddNewMessage(req.body.targetId)
        await fs.unlinkSync(req.file.path)
        return res.status(200).send(messageImage)
      }else{
        await contactModel.afterAddMessage(req.user._id,req.body.targetId)
        await fs.unlinkSync(req.file.path)
        return res.status(200).send(messageImage)
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  })
}
module.exports = addNewMessagesImage