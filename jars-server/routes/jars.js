import express from 'express';
import {getJars, createJars} from '../controllers/jars.js'
const routerJars = express.Router();
routerJars.get('/', getJars);
routerJars.post('/', createJars);
export default routerJars;