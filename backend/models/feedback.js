// models/feedback.model.js
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    // name: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
