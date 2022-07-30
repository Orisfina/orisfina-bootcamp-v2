import user from '../../../models/student';
import dbConnect from '../../../util/dbConect';


export default async function handler(req,res) {

  dbConnect();

  const {method} = req;

  //GET ALL STUDENTS
  if(method=== 'GET'){
    try {
      const newStudent = await user.find({});
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  //ADD NEW STUDENT
  if(method ==='POST'){
   try{
      const newUser = await user.create(req.body);
      res.status(201).json(newUser);
  }
   catch(err){
	res.status(400).json(err.message);
  }
}
}

