import express from 'express';
import {getMovements, createMovements} from '../controllers/movements.js'
const routerMovements = express.Router();
routerMovements.get('/', getMovements);
routerMovements.post('/', createMovements);
export default routerMovements;