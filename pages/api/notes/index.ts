// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getNotes, addNote } from "../../../db";

type Data = {
  data: Record<string, any>[];
};

export default nc<NextApiRequest, NextApiResponse<Data>>()
  .get((req, res) => {
    return getNotes(req, res);
  })
  .post((req, res) => {
    return addNote(req, res);
  });
