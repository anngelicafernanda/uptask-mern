import express from 'express';

import {
	agregarTarea,
	obtenerTarea,
	actualizarTarea,
	eliminarTarea,
	cambiarEstado,
} from '../controllers/tareaController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router;

router.post('/', checkAuth, agregarTarea);

router
	.route('/:id')
	.get(obtenerTarea)
	.put(actualizarTarea)
	.delete(eliminarTarea);

router.post('/estado/:id', cambiarEstado);
