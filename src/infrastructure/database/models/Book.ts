import { Schema, model, Types } from 'mongoose';

const bookSchema = new Schema(
   {
      available: {
         type: Number,
         default: 0,
      },
      image: {
         type: String,
      },
      isbn: {
         type: String,
         required: true,
         unique: true,
      },
      libraryId: {
         type: Types.ObjectId,
         ref: 'Library',
         required: true,
      },
      price: {
         type: Number,
      },
      stock: {
         type: Number,
         default: 0,
      },
      title: {
         type: String,
         required: true,
      },
      volume: {
         type: String,
      },
   },
   { timestamps: true }
);

export const Book = model('Book', bookSchema);
