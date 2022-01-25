

import mongoose from 'mongoose'
const Connection =  () => {
    try {
        const url = `mongodb+srv://my-server:${process.env.PASS}@cluster0.ukajn.mongodb.net/${process.env.USERNAME}?retryWrites=true&w=majority`;
     mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (error) {
        console.log("erroe db")
    }
}
export default Connection

