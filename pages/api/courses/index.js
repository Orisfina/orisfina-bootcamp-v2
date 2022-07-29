import course from '../../../models/course';
import dbConnect from '../../../util/dbConect';

export default async function handler(req,res) {

  dbConnect();

  const {method} = req;
//GET LIST OF ALL COURSES
  if(method === 'GET'){
    try{
     const allCourse = await course.find({});
     res.status(200).json(allCourse);
   }
    catch(err){ 
   res.status(500).json(err);
   }
 }

 //CREATE A COURSES
 if(method === 'POST'){
  try{
   const newCourse = await course.create(req.body);
   res.status(201).json(`${newCourse.course} course - successfully added`);
 }
  catch(err){
 res.status(500).json(err.message);
 }
} 

}

