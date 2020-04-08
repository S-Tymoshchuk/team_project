import * as mongoose from 'mongoose';


export const AttachmentSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  fileId: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});
