// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from "next-connect";
import db, {mockData} from '../../../db';

const getNote = (id: string, notes: unknown) =>
  (notes as Record<string, any>[]).find((n) => n.id === parseInt(id));

type Data = {
  data: Record<string, any>
};

export default nc<NextApiRequest, NextApiResponse<Data>>()
.get((req, res) => {
  const {id} = req.query
  // const notes = db.get('notes');
  const note = getNote(id as string, mockData);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.send({ data: note });
});
