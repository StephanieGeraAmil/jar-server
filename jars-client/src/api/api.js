import axios from 'axios';
const movements_url= "http://localhost:5500/movements";
export const fetchMovements=()=>axios.get(movements_url);
export const createMovement=(newMovement)=> axios.post(movements_url, newMovement);
export const updateMovement=(updatedMovement)=> axios.patch(`${movements_url}/${updatedMovement._id}`, updatedMovement);
export const deleteMovement=(deleteMovementId)=> axios.delete(`${movements_url}/${deleteMovementId}`);
const jars_url= "http://localhost:5500/jars";
export const fetchJars=()=>axios.get(jars_url);
export const createJar=(newJar)=> axios.post(jars_url, newJar);
export const updateJar=(updatedJar)=> axios.patch(`${jars_url}/${updatedJar._id}`, updatedJar);
export const deleteJar=(deleteJarId)=> axios.delete(`${jars_url}/${deleteJarId}`);
const transactions_url= "http://localhost:5500/transactions";
export const fetchTransactions=()=>axios.get(transactions_url);
export const createTransaction=(newTransaction)=> axios.post(transactions_url, newTransaction);
export const deleteTransaction=(deleteTransactionId)=> axios.delete(`${transactions_url}/${deleteTransactionId}`);