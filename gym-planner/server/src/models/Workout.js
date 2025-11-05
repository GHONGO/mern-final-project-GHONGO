import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    exercises: [
      {
        name: String,
        sets: Number,
        reps: Number,
        weightKg: Number,
        durationMin: Number,
      },
    ],
    scheduledFor: Date,
    completedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Workout', workoutSchema);


