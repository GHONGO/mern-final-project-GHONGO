import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    replies: [
      {
        authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String],
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model('ForumPost', postSchema);


