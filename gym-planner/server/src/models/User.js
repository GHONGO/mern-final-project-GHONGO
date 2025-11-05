import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['user', 'instructor', 'admin'], default: 'user' },
    age: Number,
    weightKg: Number,
    goal: { type: String, enum: ['bulking', 'cutting', 'maintenance'], default: 'maintenance' },
    equipment: [String],
    weeklyAvailabilityHours: Number,
    budgetPerWeek: Number,
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compare(password, this.passwordHash);
};

export default mongoose.model('User', userSchema);


