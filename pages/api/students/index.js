import user from '../../../models/student';
import dbConnect from '../../../util/dbConect';
const bycrpt= require('bcrypt')

export default async function handler(req,res) {

  dbConnect();

  const {method} = req;

  //GET ALL STUDENTS
  if(method=== 'GET'){
    try {
      const newStudent = await user.find({});
      res.status(200).json(newStudent);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  
  //ADD NEW STUDENT
  if(method ==='POST'){

    if(req.body.password.length < 5){
      return res.json({
        status: 'error', 
        message:'Password is too Short! Should be atleast 6 Characters'
      })
    }


    //Destructuring the req.body
    const {firstname, lastname,email, password, phone, sex, course, studentStatus, address, laptopStatus, passport} = req.body;

    //Encrpting Password before inserting into DB
    const hashedPassword = await bycrpt.hash(password, 10);

    const newUser ={
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        phone: phone,
        sex: sex,
        course: course,
        studentStatus: studentStatus,
        address: address,
        laptopStatus:laptopStatus,
        passport: passport
    }

   try{
      const response = await user.create(newUser);
      res.status(201).json({status: "okay", response});
  }

   catch(err){
    if(err.code === 11000 ){
      res.status(401).json(
        {
          status: "Error", 
          message: `Email or Phone number already exists. Try again!`
        }
        );
    }
     res.status(402).json({
      status: "Error",
      message: err.message
     });
  }
}
}

