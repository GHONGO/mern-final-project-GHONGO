import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    roomId: { type: String, index: true },
    fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    readAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema);


