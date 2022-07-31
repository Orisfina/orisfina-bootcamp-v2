import mongoose from 'mongoose'
import { course } from "../models/course";

const curriculumSchema = new mongoose.Schema({
    courseName:{
        course
    },
    module:{
        type: String,
        required:true
    }
},  {timestamps:true});   

export default mongoose.model('curriculum', curriculumSchema);
