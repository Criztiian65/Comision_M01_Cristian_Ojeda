import { Schema, model } from "mongoose";

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
});

UserSchema.pre('save', function (next) {
  if (this.isModified(username)) {
    this.username = this.username.toLowerCase()
    this.username = this.username.replace(/[^\w\s]/g, '')
    
  }
  
  
})

export const UserModel = model("User", UserSchema);
