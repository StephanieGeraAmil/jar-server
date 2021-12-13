import express from 'express';
import {getJars, createJars, updateJar} from '../controllers/jars.js'
const routerJars = express.Router();
routerJars.get('/', getJars);
routerJars.post('/', createJars);
routerJars.patch('/:id', updateJar);
export default routerJars;