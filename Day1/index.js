/*console.log("day 1");
var a="nandini";
let b=null;
const c = true;
console.log(a,b,c);
let d = "d1",g="d2",g3="d3";
console.log(a,g,g3)

console.log("day 2")
console.log(s);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());*/
const s = "30 Days Of JavaScript"
console.log(s.substring(0,3));
console.log(s.substring(4,6));
console.log(s.substr(4,6));
console.log(s.substring(2,21));
console.log(s.includes('Script'));
console.log(s.split());
console.log(s.split(' '));
const b='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(b.split(','))
console.log(s.replace('JavaScript','python'));
console.log(s.charAt(15));
console.log(s.charCodeAt('J'));
console.log(s.indexOf('a'));
console.log(s.lastIndexOf('a'));
const c = 'You cannot end a sentence with because because because is a conjunction';
console.log(c.indexOf('because'));
console.log(c.lastIndexOf('because'));
console.log(c.search('because'));
console.log(c.trim());
console.log(s.startsWith('30 Days') )
console.log(s.endsWith('JavaScript') );
console.log(s.match(/a/gi));
const x=  '30 Days of';
const y=  'JavaScript';
console.log(x.concat(y));
console.log(s.repeat(2));
