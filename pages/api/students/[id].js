import user from '../../../models/student';
import dbConnect from '../../../util/dbConect';

export default async function handler(req,res) {

  dbConnect();

  const {method, query:{id}} = req;

  //GET A SPECIFIC STUDENT
  if(method === 'GET'){
    try{
     const allUser = await user.findById(id);
     res.status(200).json(allUser);
   }
    catch(err){ 
   res.status(500).json(err.mesage);
   }
 }

//UPDATE STUDENT INFO
  if(method === 'PATCH'){
   try{
    const updateStudent = await user.findByIdAndUpdate(id, req.body,{new:true});
    if(!updateStudent){
        res.status(400).json(`Student ID not found!`)
    }
    res.status(201).json('User Information successfully Updated');
  }
   catch(err){
	res.status(500).json(err.message);
  }
}

 //DELETE A STUDENT
 if(method === 'DELETE'){
  try{
   const deletedUser = await user.findByIdAndDelete(id);
   if(!deletedUser){
    res.status(400).json(`User ID does not Exist, Kindly try again!`);
   }
   else{
    res.status(201).json(`${deletedUser.firstname} ${deletedUser.lastname} deleted successfully`);
   }
 }
  catch(err){
 res.status(500).json(err.mesage);
 }
}
}

