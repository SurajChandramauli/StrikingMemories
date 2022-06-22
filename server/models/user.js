import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//   name: { type: String,require:true},
//   email: { type: String, require: true },
//   password: { type: String, require: true },
//   id: { type: String },
// });


const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  id:String,
});

export default mongoose.model("User", userSchema);
