import { Schema, model } from "mongoose";

// Creacion del esquema 

const commentSchema = new Schema({
  author: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

export const CommentModel = model("Comment", commentSchema);