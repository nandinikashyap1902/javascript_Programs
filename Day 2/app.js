/*const s = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(s);
const x = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(x);

const num = '10';
const num1 = 10;
console.log(typeof num)
if(num===num1){
    console.log("not equal")
}
else{
  const num2= parseInt(num);
   console.log(num2+" "+"is now number");
}
const a = 'python';
const b = 'jargon';
console.log(a.includes('on'))
console.log(b.includes('on'))*/

const p = "9.8";
const p1 = parseFloat(p);
console.log(p===p1);
const fValue =(Math.ceil(p1));
console.log(typeof fValue);
console.log(fValue===10);

const s = "I hope this course is not full of jargon";
console.log(s.includes('jargon'));
console.log(s.search('jargon'));
console.log(s.match('jargon'));

let random = Math.random()*100;
random=Math.floor(random);
console.log(random);


let min=50;
let max = 100;
let random1 = Math.random();
let difference = max-min;
let random2 = Math.round(difference*random1);
random2 = random2+min;
/*console.log(random2);

let s2 = 'JavaScript';
console.log(s2.length);
let ran = Math.floor(Math.random()*11);
console.log(s2[ran]);

let s3 = "You cannot end a sentence with because because because is a conjunction";
let s4 = /because/gi;
console.log(s3.match(s4));

console.log('\t1\t1\t1\t1\t1');
console.log('\t2\t1\t2\t4\t8')
console.log('\t3\t1\t3\t9\t27')
console.log('\t4\t1\t4\t16\t64')
console.log('\t5\t1\t5\t25\t125')

/*Level 3*/
/*let s1="Love is the best thing in this world. Some found their love and some are still looking for their love"
let s3=(s1.match(/love/g));
console.log(s3.length);

let s4 = "You cannot end a sentence with because because because is a conjunction";
let s2 = s4.match(/because/g);
console.log(s2.length);*/

/*let quote = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
let s1 = Number(quote.match(5000));
let s2 = Number(quote.match(10000));
let s3 = Number(quote.match(15000));
total = s1+s2+s3;
console.log(total);*/

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence1 = sentence.replace('%','n');

console.log(sentence1);



