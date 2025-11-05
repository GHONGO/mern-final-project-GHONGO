import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    tags: [String],
    nutrition: {
      calories: Number,
      proteinG: Number,
      carbsG: Number,
      fatG: Number,
    },
    ingredients: [String],
    steps: [String],
    ratingAvg: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Recipe', recipeSchema);


