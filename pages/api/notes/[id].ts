// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(req: NextApiRequest,
  res: NextApiResponse<Data>) {
  const { id } = req.query;
  res.status(200).json({ data: `Hello from note ID ${id}` });
}