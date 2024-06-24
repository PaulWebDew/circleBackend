import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    title: { type: String, required: true, unique: false },
    tasks: { type: Schema.Types.ObjectId },
  },
  { timestamps: true },
);

export const Category = models?.Category || model("Category", CategorySchema);
