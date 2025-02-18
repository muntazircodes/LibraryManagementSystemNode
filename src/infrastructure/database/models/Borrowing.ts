import mongoose, { Schema, Document } from 'mongoose';

export interface IBorrowing extends Document {
  copyId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  borrowDate: Date;
  returnDate: Date;
  fine: number;
}

const BorrowingSchema: Schema = new Schema(
  {
      copyId: { 
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Copy', 
         required: true 
      },
      userId: { 
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User', 
         required: true 
      },
      borrowDate: { 
         type: Date, 
         required: true 
      },
      returnDate: { 
         type: Date, 
         required: true 
      },
      fine: { 
         type: Number, 
         default: 0 
      },
  },
  { timestamps: true }
);

export default mongoose.model<IBorrowing>('Borrowing', BorrowingSchema);
