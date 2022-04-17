/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paintsSchema = new Schema(
  {
    paintBrand: {
      type: String,
      required: true,
    },
    paintColour: {
      type: String,
      required: false,
    },
    hexCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Paint: any = mongoose.model("paint", paintsSchema);
export default Paint;
