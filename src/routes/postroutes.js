import express from 'express';
import { post ,getallpost,updatepost,deletepost} from '../controller/post.js';
import { userMiddleware,requireSignin } from '../commom-middleware/index.js';

const postrouter = express.Router();


// router.post('/signin', signin)

postrouter.post('/post',requireSignin,userMiddleware,post)
postrouter.post('/post/get',requireSignin,userMiddleware,getallpost)

postrouter.post('/post/update',requireSignin,userMiddleware,updatepost)
postrouter.post('/post/delete',requireSignin,userMiddleware,deletepost)



 
// router.post('/profile', profile, (req,res)=>res.status(200).json({message:"profile"}))

export default postrouter;