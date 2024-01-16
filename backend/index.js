import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// configurar CORS
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
	origin: function (origin, callback) {
		console.log('🚀  origin:', origin);
		if (whiteList.includes(origin)) {
			//puede consultar la api
			callback(null, true);
		} else {
			//no esta permitido consultar la API
			callback(new Error('Error de Cors'));
		}
	},
};
app.use(cors(corsOptions));
//Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/tareas', tareaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`servidor corriendo en el puerto ${PORT}`);
});
