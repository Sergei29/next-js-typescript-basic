// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from "next-connect";
import db, {mockData} from '../../../db';

type Data = {
  data: Record<string,any>[]
}

export default nc<NextApiRequest, NextApiResponse<Data>>()
.get((req, res) => {
  // const notes = db.get('notes');
  res.status(200).json({ data: mockData as Record<string,any>[] });
});