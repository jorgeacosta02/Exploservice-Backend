import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index'
import ESAuthRoutes from './routes/ESRoutes/ESAuth.routes';
import ESTasksRouter from './routes/ESRoutes/ESTasks.routes';

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
app.use('/api',ESAuthRoutes);
app.use('/api', ESTasksRouter);


export default  app;