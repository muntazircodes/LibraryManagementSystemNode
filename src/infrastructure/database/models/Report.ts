import { Schema, model, Document } from 'mongoose';
import { IUser } from './User';
import { ILibrary } from './Library'

interface IReport extends Document {
  user: IUser['_id'];
  library: ILibrary['_id'];
  issue: string;
  issueDate: Date;
  resolvedOn?: Date;
  resolved: boolean;
}

const reportSchema = new Schema<IReport>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  library: { type: Schema.Types.ObjectId, ref: 'Library', required: true },
  issue: { type: String, required: true },
  issueDate: { type: Date, required: true, default: Date.now },
  resolvedOn: { type: Date },
  resolved: { type: Boolean, default: false }
});

const Report = model<IReport>('Report', reportSchema);

export { Report, IReport };
