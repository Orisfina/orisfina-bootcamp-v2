import user from '../../../models/student';
import dbConnect from '../../../util/dbConect';
const bycrpt= require('bcrypt');

export default async function handler(req,res) {

  dbConnect();

  const {method} = req;

  //LOGIN STUDENT
  if(method ==='POST'){

    //DESTRUCTURE USERNAME & PASSWORD SENT FROM THE req.body
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(401).json({
            status: 'Error',
            message: 'Kindly Fill the required fields Correctly!'})
    }

    try {
        const student = await user.findOne({email, password}).lean();
        return res.status(201).json(student)
    } catch (error) {

        if(error.message == null){
            res.status(401).json({
                status: 'Error', 
                message: 'Invalid Username or Password Entered!'
            })
        }
        return res.status(400).json(
            {
                status: 'Error', 
                message: typeOf(error.message)
            }
        )
        
    }
 
}
}

