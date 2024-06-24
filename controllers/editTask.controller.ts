import { Request, Response } from "express";
import { Task } from "../models/task.model";

export const EditTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  const title = req.body.title;
  try {
    const task = await Task.findByIdAndUpdate({ _id: id }, { title });
    if (task === null) return res.status(404).send("Task not found");
    return res.status(202).end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Deleting Task");
  }
};
