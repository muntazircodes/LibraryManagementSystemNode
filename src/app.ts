// src/app.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Import database connection
import { connectDB } from './infrastructure/database/connection';

// Initialize environment variables
dotenv.config();

// Create Express app
const app: Application = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Export the app
export default app;
