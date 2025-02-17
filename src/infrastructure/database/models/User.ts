import mongoose, { Schema, Types, Document } from 'mongoose';
import { UserRoleEnum } from './enums';

export interface IUser extends Document {
   userRole: string;
   name: string;
   email: string;
   address: string;
   password: string;
   fine: number;
   issuedBooks: number;
   validDocuments: string;
   isVerified: boolean;
}

const userSchema = new Schema(
   {
      libraryId: { 
         type: Types.ObjectId, 
         ref: 'Library', 
         required: true 
      },
      userRole: { 
         type: String, 
         enum: Object.values(UserRoleEnum),
         default: UserRoleEnum.User, 
         required: true 
      },
      name: { 
         type: String, 
         required: true 
      },
      email: { 
         type: String, 
         required: true, 
         unique: true 
      },
      address: { 
         type: String, 
         required: true 
      },
      password: { 
         type: String, 
         required: true 
      },
      fine: { 
         type: Number, 
         default: 0 
      },
      issuedBooks: { 
         type: Number, 
         default: 0 
      },
      validDocuments: { 
         type: String, 
         required: true 
      },
      isVerified: { 
         type: Boolean, 
         default: false 
      }
   }, 
{ timestamps: true });

export const User = mongoose.model<IUser>('User', userSchema);
