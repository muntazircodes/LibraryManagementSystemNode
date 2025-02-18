import mongoose, { Schema, Document } from 'mongoose';

export interface IReservation extends Document {
  copyId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  reservationTime: Date;
  expirationTime: Date;
}

const ReservationSchema: Schema = new Schema(
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
      reservationTime: { 
         type: Date, 
         default: Date.now 
      },
      expirationTime: { 
         type: Date, 
         required: true 
      },
  },
  { timestamps: true }
);

export default mongoose.model<IReservation>('Reservation', ReservationSchema);
