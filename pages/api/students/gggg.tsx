// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../util/dbConect'
const user = require('../../../models/Users')

type Data = {
  firstname: string,
  lastname: string,
  email: string,
  phone: Number,
  sex: string,
  course: string,
  studentStatus: Boolean,
  laptopStatus: Boolean,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  dbConnect();
  const {method} = req;

  if(method=== 'GET'){
    try {
      const student='Joshuaoyewole';
      res.status(201).json({
        firstname:'John',
        lastname: 'Doe',
        email: 'joshuaoyewole@gmail.com',
        phone: 0o7032054367,
        sex: 'Male',
        course: 'Frontend Development',
        studentStatus: true,
        laptopStatus:true}
      );
    } catch (error:any) {
      res.status(500).json(error)
    }
  }
  if(method==='POST'){
   
  }
}
