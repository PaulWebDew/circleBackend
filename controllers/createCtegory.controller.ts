import { Request, Response } from "express";
import { Category } from "../models/category.model";

export const CreateCategory = async (req: Request, res: Response) => {
  const request = req.body;
  const body = await request;
  const existCategory = await Category.findOne({ title: body.title });
  if (!!existCategory) {
    return res.status(400).json("Category with this title already exists");
  }
  const newCategory = await Category.create({ title: body.title });
  const { title, _id } = newCategory;
  res.send({ title, id: _id });
};
