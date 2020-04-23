import { Document } from 'mongoose';


export interface SocialConnect extends Document {
  providerId: string;
  userId: string;
  createdAt: Date;
  accessToken: string;
  expiresAt: string,
  authorizId: string
}
