// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from "next-connect";

type Data = {
  data: string
};

export default nc<NextApiRequest, NextApiResponse<Data>>()
.get((req, res) => {
  const {id} = req.query
  res.status(200).json({ data: `Hello from note ID ${id}` });
});
