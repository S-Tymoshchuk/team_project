import * as mongoose from 'mongoose';


export const PostSchema = new mongoose.Schema({
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
