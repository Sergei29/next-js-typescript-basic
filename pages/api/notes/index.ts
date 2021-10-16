// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from "next-connect";

type Data = {
  data: string
}

export default nc<NextApiRequest, NextApiResponse<Data>>()
.get((req, res) => {
  
  res.status(200).json({ data: 'Hello from notes index.' });
});