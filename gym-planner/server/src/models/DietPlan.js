import mongoose from 'mongoose';

const dietPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    dailyCalories: Number,
    budgetPerWeek: Number,
    meals: [
      {
        name: String,
        calories: Number,
        proteinG: Number,
        carbsG: Number,
        fatG: Number,
        ingredients: [String],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('DietPlan', dietPlanSchema);


