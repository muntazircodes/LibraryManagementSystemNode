import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.DATABASE_URI;
  if (!uri) {
    throw new Error('MONGO_URI is not defined in .env file');
  }

  try {
    await mongoose.connect(uri); // No extra options needed for modern drivers
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};