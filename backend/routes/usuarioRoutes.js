import express from 'express';
const router = express.Router();
import { registrar, autenticar } from '../controllers/usuarioControllers.js';

//creacion, registro y confirmacion de usuarios
router.post('/', registrar);
router.post('/login', autenticar);

export default router;
