import { model, models, Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId },
  },
  { timestamps: true },
);

export const Task = models?.Task || model("Task", TaskSchema);
