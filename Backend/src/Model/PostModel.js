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
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  imageURL: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
  versionKey: false,
});

export const PostModel = model("Post", PostSchema);