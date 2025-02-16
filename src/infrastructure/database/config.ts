import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  uri: process.env.DATABASE_URI as string,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000
  }
};
