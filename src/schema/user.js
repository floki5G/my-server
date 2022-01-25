import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 20
    },

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true
    },

    mobile: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: 'user'
    },

}, { timestamp: true })
userschema.virtual('pass')
    .set(function (pass) {
        this.password = bcrypt.hashSync(pass, 10)
    })

userschema.methods = {
    authenticate: function (pass) {
        return bcrypt.compareSync(pass, this.password)
    }
}
const Userschema = mongoose.model('user', userschema)

export default Userschema