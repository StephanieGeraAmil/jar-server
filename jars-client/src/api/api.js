import axios from 'axios';
const movements_url= "http://localhost:5500/movements";
export const fetchMovements=()=>axios.get(movements_url);
export const createMovement=(newMovement)=> axios.post(movements_url, newMovement);
const jars_url= "http://localhost:5500/jars";
export const fetchJars=()=>axios.get(jars_url);
export const createJar=(newJar)=> axios.post(jars_url, newJar);

