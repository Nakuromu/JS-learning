const blackListedWord1 = 'спам';
const blackListedWord2 = 'розпродаж';

const string1 = 'Привіт, сПам'
const string2 = 'Привіт, рОзпродаж'

console.log(string1.toLowerCase().includes(blackListedWord1))
console.log(string1.toLowerCase().includes(blackListedWord2))
console.log(string2.toLowerCase().includes(blackListedWord1))
console.log(string2.toLowerCase().includes(blackListedWord2))
