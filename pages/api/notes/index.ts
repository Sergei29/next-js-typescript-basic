// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from "next-connect";
import db, {mockData} from '../../../db';

type Data = {
  data: Record<string, any>[]
}

export default nc<NextApiRequest, NextApiResponse<Data>>()
.get((req, res) => {
  /**
   * @description the json db doesn't work in production - it requires a real live db to be used instead
   */
  // const notes = db.get('notes');
  res.status(200).json({ 
    data: [{
    "id": 1634233912404,
    "title": "Note 0"
    }] 
  });
});