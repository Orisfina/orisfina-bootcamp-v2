import mongoose from 'mongoose'

const assignmentSchema = new mongoose.Schema({
    course:{
        type: String,
        unique:true,
        required:true,
    }
},  {timestamps:true});   

export default mongoose.model('Assignment', assignmentSchema);
