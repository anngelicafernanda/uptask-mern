import express from 'express';
const router = express.Router();
import { registrar } from '../controllers/usuarioControllers.js';

//creacion, registro y confirmacion de usuarios
router.post('/', registrar);

export default router;
