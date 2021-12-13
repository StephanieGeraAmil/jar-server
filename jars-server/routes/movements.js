import express from 'express';
import {getMovements, createMovements,updateMovements} from '../controllers/movements.js'
const routerMovements = express.Router();
routerMovements.get('/', getMovements);
routerMovements.post('/', createMovements);
routerMovements.patch('/:id', updateMovements);
export default routerMovements;