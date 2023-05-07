/*const firstName="nandini";
const lastName="kashyap";
const  country="India";
const city="Agra";
const  isMarried=false;
const year=2023;
console.log("firstName"+" "+typeof(firstName));
console.log("lastName"+" "+typeof(lastName));
console.log("country"+" "+typeof(country));
console.log("city"+" "+typeof(city));
console.log("isMarried"+" "+typeof(isMarried));
console.log("year"+" "+typeof(year));*/

/*const a = '10';
console.log(typeof(a)==typeof(10))
console.log(typeof(a)===typeof(10))

const b ='9.8';
console.log(parseInt(b)===10);*/

/*//truthy values
console.log('nandini');
console.log(90);
console.log(true);

//falsy values
console.log(0);
console.log("");
console.log(null)*/

/*console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4!=4);
console.log(4!==4);
console.log(4=='4');
console.log(4==='4');

const a = 'python';
const b ="jargon";
console.log(a.length);
console.log(b.length);
console.log(6!=6);*/

/*console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 ==='4'));*/

/*const a = "dragon"
const b = "python";
console.log(!(a.includes('on')));
console.log(!(b.includes('on')));*/


/*let a = new Date();
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());*/

//area of triangle
/*const base = window.prompt("enter base");
const height = window.prompt("height");
window.alert(`area is ${0.5*base*height}`)*/

//perimeter of triangle
/*const A_side = Number(prompt("enter A side"));
const B_side = Number(prompt("enter B side"));
const C_side = Number(prompt("enter C side"));
alert(`Perimeter is ${A_side+B_side+C_side}`);*/

//area of rectangle
/*const length = Number(prompt("enter length"));
const width = Number(prompt("enter width"));
alert(`area is ${length*width}`);
alert(`perimeter is${2*(length*width)}`);*/

//area of circle
/*const radius = parseInt(prompt("enter radius"));
alert(`area is ${2*3.14*(radius)*(radius)}`)
alert(`circumference is${2*3.14*radius}`)*/

/*let x =prompt("enter x's value")
let y = x*x +6*x+9;
alert(y);
if(y===0){
    alert (`${x} provides 0`)
}*/

/*const a = Number(prompt('enter hours'));
const b = Number(prompt('enter rate per hour'));
alert(`earning is ${a*b}`)*/

/*const name1 = prompt("enter name");
if(name1.length>7){
    alert("your name is long");
}
else{
    alert ("it is short");
}*/

/*let firstname = prompt("enter f name");
let lastName = prompt("enter lastname");
alert(`Your first name, ${firstname} is longer than your family name, ${lastName}`)*/

/*const myAge=23;
const yourAge=25;
console.log(`I am ${myAge} years older than yours.`)*/

/*const birthYear = prompt("enter your birth year");
const currentAge = 2023-birthYear;
if(currentAge===18 || currentAge>18){
    alert(`you are ${currentAge}. You are old enough to drive`);
}
else{
    alert(`You are ${currentAge}. You will be allowed to drive after ${18-currentAge} years.`)
}*/

const time = new Date();
const date = time.getDate();
const month = time.getMonth();
const day = time.getDay();
const hour = time.getHours();
const minute = time.getMinutes();
const year = time.getFullYear();

prompt(`${year}-${month}-${day} ${hour}:${minute}`)
prompt(`${date}-${month}-${year} ${hour}:${minute}`)
prompt(`${date}/${month}/${year} ${hour}:${minute}`)