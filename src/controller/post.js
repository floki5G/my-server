import Postschema from '../schema/posts.js';
import jwt from 'jsonwebtoken'

export const post = (req, res) => {

    const post = {
        createdBy:req.body.createdBy,    
        message:req.body.message,
        comments:req.body.comments

    }
    const _post = new Postschema(post)
    _post.save((error, data) => {

        if (data) {
            res.status(200).json({ message: data })

        }
        if (error) {
            res.status(200).json(error)

        }
    })
}



export const getallpost = async (req, res) => {

    const user = await Postschema.find({})
        .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
                res.status(200).json({ message: data })
            }
    })

}


export const updatepost = (req, res) => {

    const _updatepost = {
        createdBy:req.body.createdBy,    
        message:req.body.message,
        comments:req.body.comments
    }
    const updatepost = Postschema.findByIdAndUpdate({ _id: req.body._id },_updatepost, { new: true })
        .exec((error, data) => {

            if (data) {

                res.status(200).json({ message: data })

            }
            if (error) {
                res.status(500).json(error)

            }
        })

}


export const deletepost= async (req, res) => {

    const deletepost = await Postschema.findByIdAndRemove({ _id: req.body._id })
        .exec((error, data) => {
       
            if (data) {
                res.status(200).json({ message: data })
            }
            if (error) {
                res.status(500).json(error)
            }
        })
}