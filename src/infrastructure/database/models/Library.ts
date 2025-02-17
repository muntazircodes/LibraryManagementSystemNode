import mongoose, { Schema, Document } from "mongoose";

export interface ILibrary extends Document {
   name: string;
   address: string;
   licenseNo: string;
   libraryDocuments: string;
   isVerified: boolean;
}

const LibrarySchema: Schema = new Schema(
   {
      name: { 
         type: String, 
         required: true, 
         maxlength: 200 
      },
      address: { 
         type: String, 
         required: true, 
         maxlength: 200 
      },
      licenseNo: { 
         type: String, 
         required: true, 
         unique: true, 
         maxlength: 256 
      },
      libraryDocuments: { 
         type: String, 
         required: true, 
         maxlength: 256 
      },
      isVerified: { 
         type: Boolean, 
         default: false 
      },
   },
   {
      timestamps: true,
      collection: "libraries",
   }
);

export const Library = mongoose.model<ILibrary>("Library", LibrarySchema);
