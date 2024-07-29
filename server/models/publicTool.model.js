import mongoose from "mongoose";
const { Schema } = mongoose;

const publicToolSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },

    path: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    style: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AdminTools", publicToolSchema);
