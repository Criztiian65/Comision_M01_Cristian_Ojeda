import { Schema, model } from "mongoose";

// Creacion del esquema 

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  }
});

export const PostModel = model("Post", PostSchema);