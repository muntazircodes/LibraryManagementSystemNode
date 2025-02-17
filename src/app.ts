import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { connectDB } from './infrastructure/database/connection';

dotenv.config();

const app: Application = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

export default app;