import { Task } from "../models/task.model";
import { Request, Response } from "express";

export const CreateTaskController = async (req: Request, res: Response) => {
  const category = req.body.categoryId;
  const title = req.body.title;
  console.log(category);
  await Task.create({
    title,
    category,
  });
  const body = req.body;
  console.log(body);
  return res.send(body);
};
