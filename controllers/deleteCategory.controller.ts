import { Request, Response } from "express";
import { Category } from "../models/category.model";

export const deleteCategory = async (req: Request, res: Response) => {
  const id = req.params.id;
  const category = await Category.deleteOne({ _id: id });
  if (category.deletedCount === 0) {
    return res.status(404).json("Category not found");
  } else {
    res.status(202).end();
  }
};
