import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
tags: [String],
author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
media: [{ type: String }],
createdAt: { type: Date, default: Date.now },
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
export default mongoose.model('Lesson', LessonSchema);