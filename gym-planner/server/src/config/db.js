import mongoose from 'mongoose';

export async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gym_planner';
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, {
    autoIndex: true,
  });
}


