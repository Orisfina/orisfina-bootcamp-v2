// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id:number,
  projectImg: string,
  projectDesc: string,
  projectLink: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    {
      id:1,
      projectDesc:'jsjsj',
      projectImg: 'kdkdkd',
      projectLink: 'kdkd'
    })
}
