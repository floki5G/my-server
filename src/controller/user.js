import Userschema from '../schema/user.js';
import jwt from 'jsonwebtoken'

export const signin = async(req, res) => {
        const user = await Userschema.findOne({ email: req.body.email })

        .exec((error, user) => {
            if (error) {
                return res.status(500).json({ message: "signin failed" })
            }
            if (user) {
                if (user.authenticate(req.body.pass) && user.role == "user") {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRATE, { expiresIn: '1d' });
                    const { _id,name,mobile, email, role } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id,name,mobile, email, role 
                        }
                    })
                }
                else {
                    return res.status(500).json({ message: "invalid pass" })
                }
            } else {
                return res.status(500).json({ message: "someting went wrong / user not found" })
            }
        })

}

export const signup = (req, res) => {


    const {
        name,
        email,
        mobile,
        pass,
        role

    } = req.body;
    const _user = new Userschema({
        name,
        email,
        mobile,
        pass,
        role
    })
    _user.save((error, data) => {

        if (data) {
            res.status(200).json({ message: data })

        }
        if (error) {
            res.status(200).json(error)

        }
    })
}



export const getalluser = async (req, res) => {

    const user = await Userschema.find({})
        .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
                res.status(200).json({ message: data })
            }
        })

}


export const updateuser = (req, res) => {

    const _updateuser = {
        name: req.body.name,
        mobile:req.body.mobile,
    email:req.body.email,
    pass:req.body.pass
    }
    const update = Userschema.findByIdAndUpdate({ _id: req.body._id },_updateuser, { new: true })
        .exec((error, data) => {

            if (data) {

                res.status(200).json({ message: data })

            }
            if (error) {
                res.status(500).json(error)

            }
        })

}


export const deleteuser= async (req, res) => {

    const update = await Userschema.findByIdAndRemove({ _id: req.body._id })
        .exec((error, data) => {
       
            if (data) {
                res.status(200).json({ message: data })
            }
            if (error) {
                res.status(500).json(error)
            }
        })
}