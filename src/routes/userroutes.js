import express from 'express';
import { signup,signin ,getalluser,updateuser,deleteuser} from '../controller/user.js';
const userrouter = express.Router();


// router.post('/signin', signin)
userrouter.post('/user/signin',signin)

userrouter.post('/user',signup)
userrouter.post('/user/get',getalluser)

userrouter.post('/user/update',updateuser)
userrouter.post('/user/delete',deleteuser)



 
// router.post('/profile', profile, (req,res)=>res.status(200).json({message:"profile"}))

export default userrouter;