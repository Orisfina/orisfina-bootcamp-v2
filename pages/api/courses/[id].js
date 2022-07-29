import course from '../../../models/course';
import dbConnect from '../../../util/dbConect';

export default async function handler(req,res) {

  dbConnect();

  const {method, query:{id}} = req;

  //GET A SPECIFIC COURSE
  if(method === 'GET'){
    try{
     const allCourse = await course.findById(id);
     res.status(200).json(allCourse);
   }
    catch(err){ 
   res.status(500).json(err);
   }
 }

//UPDATE A COURSES
  if(method === 'PATCH'){
   try{
    const updateCourse = await course.findByIdAndUpdate(id, req.body);
    res.status(201).json('Course successfully Updated');
  }
   catch(err){
	res.status(500).json(err);
  }
}

 //DELETE A COURSES
 if(method === 'DELETE'){
  try{
   const deletedCourse = await course.findByIdAndDelete(id);
   res.status(201).json(`${deletedCourse.course} course - deleted successfully`);
 }
  catch(err){
 res.status(500).json(err);
 }
}
}

