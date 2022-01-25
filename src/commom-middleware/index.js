import jwt from 'jsonwebtoken'

import path from 'path'
import shortid from 'shortid';

// REQUIRE SIGIN 
export const requireSignin = (req, res, next) => {
    if (req) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRATE)
        req.user = user
    }
    else{
        return res.status(500).json({ message: "authorization req" });
    }
    next()

}


// user AUTHOROZATION 
export const userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(500).json({ message: "user access denied" });
    }
    next()
}




