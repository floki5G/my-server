import mongoose from "mongoose";

const postschema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    createdAT: Date,


    message: {
        type: String,
        // require: true,
        // trim: true
    },
    comments: [
        {
            sentBY: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            sentAt: Date,
            liked: {
                type: String,
                enum: ["yes", "no"],
                default: "no"
            }
        }
    ],


    updateAt: Date


}, { timestamps: true }

)

const Postschema = mongoose.model('posts', postschema)

export default Postschema