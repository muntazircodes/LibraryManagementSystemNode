import { Schema, model, Types } from 'mongoose';
import { BookConditionEnum } from './enums';

const copySchema = new Schema(
   {
      bookId: { 
         type: Types.ObjectId, 
         ref: 'Book', 
         required: true 
      },
      libraryId: { 
         type: Types.ObjectId, 
         ref: 'Library', 
         required: true 
      },
      rackId: { 
         type: Types.ObjectId, 
         ref: 'Rack' 
      },
      bookCondition: {
         type: String,
         enum: Object.values(BookConditionEnum),
         default: BookConditionEnum.New,
         required: true
      },
      isAvailable: { 
         type: Boolean, 
         default: false 
      }
   }, 
{ timestamps: true });

export const Copy = model('Copy', copySchema);
