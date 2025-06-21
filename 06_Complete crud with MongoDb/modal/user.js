import { Schema, model } from "mongoose";


const UserSchema = new Schema({
  username: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const User = model("User", UserSchema);
export default User;
