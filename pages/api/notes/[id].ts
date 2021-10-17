// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { updateNote, deleteNote, getOneNote } from "../../../db";

type Data = {
  data: Record<string, any>;
};

export default nc<NextApiRequest, NextApiResponse<Data>>()
  .get((req, res) => {
    return getOneNote(req, res);
  })
  .patch((req, res) => {
    return updateNote(req, res);
  })
  .delete((req, res) => {
    return deleteNote(req, res);
  });
