/**
 * @param {number} max 
 * @param {number} min 
 * @returns Numero entre o menor e o maior
 */
export const random = (max = 10, min = 0) => Math.floor(Math.random() * max + min);