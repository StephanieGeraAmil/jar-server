import express from 'express';
import {getTransactions, createTransactions,deleteTransaction} from '../controllers/transactions.js'
const routerTransactions = express.Router();
routerTransactions.get('/', getTransactions);
routerTransactions.post('/', createTransactions);
routerTransactions.delete('/:id', deleteTransaction);

export default routerTransactions;