import express from 'express';
import {getMovements, createMovements} from '../controllers/movements.js'
const router = express.Router();
router.get('/', getMovements);
router.post('/', createMovements);
export default router;