import * as mongoose from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
  providerId: {
    type: Array,
  },
  postId: {
    type: String,
  },
  userId: {
    type: String,
  },
  startsAt: {
    type: Date,
  },
  notify: {
    type: String,
  },
  status: {
    type: String,
  },
});
