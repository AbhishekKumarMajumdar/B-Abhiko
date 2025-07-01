// models/User.ts
import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPurchase {
  project_id: Types.ObjectId;
  purchase_date?: Date;
  price_at_purchase: number;
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface IUser extends Document {
  email: string;
  mobile_no: string;
  password: string;
  role: 'user' | 'admin';
  purchased_projects: IPurchase[];
}

const PurchaseSchema: Schema = new Schema<IPurchase>({
  project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  purchase_date: { type: Date, default: Date.now },
  price_at_purchase: { type: Number, required: true },
  status: { type: String, enum: ['Completed', 'Pending', 'Failed'], default: 'Pending' },
});

const UserSchema: Schema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    mobile_no: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    purchased_projects: [PurchaseSchema],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
