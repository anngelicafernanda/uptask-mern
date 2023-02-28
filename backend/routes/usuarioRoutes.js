import express from 'express';
const router = express.Router();
import {
	registrar,
	autenticar,
	confirmar,
	olvidePassword,
} from '../controllers/usuarioControllers.js';

//creacion, registro y confirmacion de usuarios
router.post('/', registrar);
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);

export default router;
