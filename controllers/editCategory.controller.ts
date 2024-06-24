import { Request, Response } from "express";
import { Category } from "../models/category.model";

export const EditCategory = async (req: Request, res: Response) => {
  const id = req.params.id;
  const newCategory = await Category.updateOne(
    { _id: id },
    { title: req.body.title },
  );
  if (newCategory.modifiedCount === 0) {
    return res.status(404).json("Category not found");
  } else {
    return res.status(202).end();
  }
};
