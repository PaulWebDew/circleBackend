import { Request, Response } from "express";
import { Task } from "../models/task.model";

export const DeleteTaskController = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const task = await Task.findOneAndDelete({ _id: id });
    if (task === null) return res.status(404).send("Task not found");
    return res.json(task);
  } catch (e) {
    console.log(e);
  }
};
