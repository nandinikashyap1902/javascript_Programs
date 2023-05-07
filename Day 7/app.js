/*function fullName(firstname,lastname){
return `${firstname} ${lastname}`
}
console.log(fullName("nandini","kashyap"));*/

/*function addNumbers(one,two){
    return one+two;
}
console.log(addNumbers(1,2));*/

/*function rectangle(length,Width,height){
    area = length*Width;
    perimeter = 2*(length+Width);
    volume = length*Width*height;
    return {area,perimeter,volume};
}
console.log(rectangle(8,9,5))*/

/*const info=rectangle=(length,Width,height)=>{
    area = length*Width;
    perimeter = 2*(length+Width);
    volume = length*Width*height;
    return {area,perimeter,volume};
}
console.log(info(8,9,5))*/

/*console.log('BMI CALCULATOR')

Calc=(weight,height)=>{
bmi = weight/(height*height);
console.log(bmi)
if(bmi < 18.5){
    console.log( "Underweight");
}
else if(bmi>=18.5 && bmi <=24.9){
    console.log( "Normal weight");
}
else if(bmi>=25 && bmi <=29.9){
    console.log( "Over weight");
}
else if(bmi>=30){
    console.log("Obese");
}
}
Calc(55,1.73)*/

/*min=(one,two,three)=>{
if(one<two && one<three){
    console.log("min is"+one)
    value = one
}
if(two<one && two<three){
    console.log("min is"+two)
    value = two
}
if(three<one && three<two){
    console.log("min is"+three)
    value = three
}
return value
}
console.log(min(-103,2.5,200))*/

/*max=(one,two,three)=>{
if(one>two && one>three){
    console.log('max is'+one)
}
 if(two>one && two>three){
    console.log('max is'+two)
}
 if(three>one && three>two){
    console.log('max is'+three)
}
}

max(1000,67,102);*/
/*printArray=(arr)=>{
    let i=0;
while(i<arr.length){
console.log(arr[i]);
i++;
}
}
printArray([6,7,8,9])*/

/*showDateTime=()=>{
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

console.log(showDateTime());*/
/*swapValues=(one,two)=>{
    console.log("before swapping"+one+" "+two)
let temp =0;
temp = one;
one = two;
two = temp;
console.log("after swapping"+one+" "+two)
}

swapValues(8,9)*/

/*arr =[78,3,2,1];
console.log(arr.reverse());*/

/*function reverseArr(arr){
    console.log(arr)
let leftIndex=0;
let rightIndex=arr.length-1;
while(leftIndex<rightIndex){
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
}
console.log(arr)
}

reverseArr([23,1,34,78,10]);*/

/*function capitalizeArray(arr){
arr.join();
let arr2 = [];
let i=0;
while(i<arr.length){
    arr2[i] = arr[i].toUpperCase();
    i++;
}
console.log(arr2)

}

capitalizeArray(["nandini","is","women"])*/

/*function addItem(arr){
arr.push(2);
console.log(arr)
}

addItem([23,1,3,4,5]);*/

/*function removeItem(arr){
arr.pop();
console.log(arr)
}
removeItem([1,2,34,5]);*/

/*evensAndOdds=(num)=>{
let i=1;
let evens=0;
let odds=0;
while(i<=num){
    if(i%2===0){
evens++;
    }
    else{
        odds++;
    }
    i++;
}
console.log("number of evens"+evens);
console.log("number of odds"+odds);
}

evensAndOdds(100)*/

/*function randomHexaNumberGenerator(s){
    let id="";
    for(let i=0;i<s.length;i++){

        id+= s.charAt(Math.floor(Math.random()*s.length));
    }
    console.log(id);
}

randomHexaNumberGenerator("#ee33df");*/

/*let s = "41XTDbE";
let s1 = "";
for(let i=0;i<s.length;i++){
    s1+=s.charAt(Math.floor(Math.random()*s.length));
}
console.log(s1);*/

userIdGeneratedByUser=()=>{
    let s = "1GCSgPLMaBAVQZ26";
    let characters = window.prompt("enter the number of characters you want");
    let ids = window.prompt("enter number of ids you want");
    let userId = "";
    let num = 1;
    while(ids!==0){
        for(let i=0;i<characters.length;i++){
            userId+=s.charAt(Math.floor(Math.random()*characters.length));
        }
        ids--;
        console.log(`your ${num} id is ${userId}`);
    }
}
