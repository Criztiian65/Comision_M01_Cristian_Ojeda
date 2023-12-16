import { Schema, model } from "mongoose";
import * as bcrypt from 'bcrypt'

// Creacion del esquema 

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
},
{
  timestamps: true,
  versionKey: false,
});




UserSchema.pre('save', async function (next) {
  // if (this.isModified(email)){
  //   this.email = this.email.replace(/ /g, '');
  // }

  if (!this.isModified('password')) return next();

  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;


  next();
  
  
  
})

export const UserModel = model("User", UserSchema);
