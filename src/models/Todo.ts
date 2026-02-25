import mongoose from "mongoose";
const { Schema } = mongoose;
const todoSchema = new Schema(
  {
    text: { type: String, required: true },
    done: { type: Boolean, default: false },
    author: {
      note: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    }
  },
  { timestamps: true },
);
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
