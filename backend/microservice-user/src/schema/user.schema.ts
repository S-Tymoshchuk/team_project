import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

export const  UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
    uniqueCaseInsensitive: true
  },
  password: {
    type: String,
    required: true
  },
  timeZone: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  }

});
UserSchema.plugin(uniqueValidator, {
  message: 'Error, expected {PATH} to be unique.'
});
