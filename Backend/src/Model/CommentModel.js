import { Schema, model } from "mongoose";

// Creacion del esquema 

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  description: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
},
{
  timestamps: true,
  versionKey: false,
});

export const CommentModel = model("Comment", commentSchema);