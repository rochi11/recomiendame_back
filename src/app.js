import express, { json } from 'express';                    // Este archivo (app.js) sirve para configurar el servidor
import morgan from 'morgan';

// Importando rutas
import sesionRouter from './routes/sessions';
import userRouter from './routes/users';
import recomendationRoute from './routes/recomendations';
import productRoute from './routes/products';
import preferenceRoute from './routes/preferences';

// Inicializacion
const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/sesiones', sesionRouter);
app.use('/api/usuarios', userRouter);
app.use('/api/recomendaciones', recomendationRoute);
app.use('/api/productos', productRoute);
app.use('/api/preferencias', preferenceRoute);

export default app;