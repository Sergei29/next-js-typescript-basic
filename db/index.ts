import { connectToMongoDB } from "./connectToMongoDB";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export const getNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToMongoDB();
    const notes = await db
      .collection("notes")
      .find({})
      .sort({ published: -1 })
      .toArray();

    return res.status(200).json({
      data: JSON.parse(JSON.stringify(notes)),
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      data: (error as Error).message,
    });
  }
};

export const addNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connect to the database
    let { db } = await connectToMongoDB();
    // add the note
    const newNote = await db.collection("notes").insertOne(req.body);
    // return a message
    return res.status(200).json({
      data: newNote,
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      data: (error as Error).message,
    });
  }
};

export const updateNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connect to the database
    let { db } = await connectToMongoDB();
    // update the published status of the note
    const updatedNote = await db.collection("notes").updateOne(
      {
        _id: new ObjectId(`${req.query.id}`),
      },
      { $set: { ...req.body, published: true } }
    );

    // return a message
    return res.status(200).json({
      data: updatedNote,
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      data: (error as Error).message,
    });
  }
};

export const getOneNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connect to the database
    let { db } = await connectToMongoDB();
    // Findinging the note
    const foundResult = await db.collection("notes").findOne({
      _id: new ObjectId(`${req.query.id}`),
    });

    // return a message
    return res.status(200).json({
      data: foundResult,
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      data: (error as Error).message,
    });
  }
};

export const deleteNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connect to the database
    let { db } = await connectToMongoDB();
    // Deleting the note
    const deleteResult = await db.collection("notes").deleteOne({
      _id: new ObjectId(`${req.query.id}`),
    });

    // return a message
    return res.status(200).json({
      data: deleteResult,
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      data: (error as Error).message,
    });
  }
};
