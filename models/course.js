import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    course:{
        type: String,
        unique:true,
        required:true,
    },
    price:{
        type: Number,
        required: true
    },
    duration:{
        type: String,
        required:true,
    },
},  {timestamps:true});   

export default mongoose.model('Course');
