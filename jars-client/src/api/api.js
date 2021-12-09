import axios from 'axios';
const url= "http://localhost:5500/movements";
export const fetchMovements=()=>axios.get(url);
export const createMovement=(newMovement)=> axios.post(url, newMovement);

