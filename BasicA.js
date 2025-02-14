const chars = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

const letters = chars.filter(c => typeof c === "string").sort();
const numbers = chars.filter(c => typeof c === "number").sort((a, b) => a - b);

const result = [...letters, ...numbers];

console.log(result);