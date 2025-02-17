import { Schema, model, Types } from "mongoose";

const rackSchema = new Schema(
   {
      libraryId: { 
         type: Types.ObjectId, 
         ref: "Library", 
         required: true },
      block: { 
         type: String, 
         required: true 
      },
      building: { 
         type: String, 
         required: true 
      },
      room: { 
         type: String, 
         required: true 
      },
   },
   { timestamps: true }
);

export const Rack = model("Rack", rackSchema);
