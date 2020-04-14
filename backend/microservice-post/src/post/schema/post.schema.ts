import * as mongoose from 'mongoose';


export const PostSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  templateId: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
