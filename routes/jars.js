import express from 'express';
import {getJars, createJars, updateJar, deleteJar} from '../controllers/jars.js'
const routerJars = express.Router();
routerJars.get('/', getJars);
routerJars.post('/', createJars);
routerJars.patch('/:id', updateJar);
routerJars.delete('/:id',deleteJar);
export default routerJars;