import express from 'express';
import {getTransactions, createTransactions} from '../controllers/transactions.js'
const routerTransactions = express.Router();
routerTransactions.get('/', getTransactions);
routerTransactions.post('/', createTransactions);

export default routerTransactions;