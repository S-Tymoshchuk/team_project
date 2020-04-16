import * as mongoose from 'mongoose';

export const SocialSchema = new mongoose.Schema({
  providerId: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: String,
    required: true,
  }
});
