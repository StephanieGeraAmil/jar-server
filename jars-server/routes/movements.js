import express from 'express';
import {getMovements, createMovements,updateMovements,deleteMovements} from '../controllers/movements.js'
const routerMovements = express.Router();
routerMovements.get('/', getMovements);
routerMovements.post('/', createMovements);
routerMovements.patch('/:id', updateMovements);
routerMovements.delete('/:id', deleteMovements);
export default routerMovements;