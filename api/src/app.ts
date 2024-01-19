import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index'
import authRoutes from './routes/routes/auth.routes';
import tasksRouter from './routes/routes/tasks.routes';

import './database';

dotenv.config();
const port = process.env.PORT || 3001;

// initializations
const app = express();

// settings
app.set('port', port);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', routes);
app.use('/api',authRoutes);
app.use('/api', tasksRouter);


export default  app;