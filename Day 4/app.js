//Q.2
/*const myAge = Number(prompt("enter your age"));
const yourAge = Number(prompt("enter your age"));
if(myAge>yourAge){
    alert("I am older than you")
}
else{
    alert("you are not older")
}*/


//Q.3
/*const a = prompt("enter value of A")
const b = prompt("enter value of B")
if(a>b){
    alert("a is greater than b")
}
else{
    alert("B is greater");
}

(a>b)?console.log("a is greater than b"):console.log("B is greater");*/

//Q.4
/*const num = Number(prompt("enter value"));
if(num%2===0){
    console.log("number is divisible");
}
else{
    console.log("not divisible");
}*/

//Level-2
//Q.1
/*const grades = Number(prompt("enter grade"))
if(grades>=80&& grades<=100)
    console.log("A rank");
if(grades>=70 && grades<=89)
console.log("B rank");
if(grades>=60&& grades<=69)
console.log("C rank");
if(grades>=50 && grades<=59)
console.log("D rank");
if(grades>=0 && grades<=49)
    console.log("F rank");*/

    /*switch(grades){
        case grades>=80&& grades<=100:
            console.log("A grade")
            break;

        case grades>=70 && grades<=89:
            console.log("B rank")
            break;

            case grades>=60&& grades<=69:
                console.log("C rank")
                break;
                case grades>=50 && grades<=59:
            console.log("D rank")
            break;

            case grades>=0 && grades<=49:
            console.log("F rank")
            break;
    }*/

   // Q.4
/*const weather = prompt("enter month")
switch(weather){
    case 'September':
     console.log("the season is Autumn.");
     case 'October':
        console.log("the season is Autumn.");
        case 'November':
            console.log("the season is Autumn.");

        case 'December':
        console.log("the season is Winter.");
        case 'January':
        console.log("the season is Winter.");
        case 'February':
        console.log("the season is Winter.");        

            case 'March':
            console.log("the season is Spring.");
            case 'April ':
            console.log("the season is Spring.");
            case 'May':
            console.log("the season is Spring.");        
    
            case 'June':
            console.log("the season is Summer.");
            case 'July ':
            console.log("the season is Summer.");
            case 'August':
            console.log("the season is Summer.");        
    
}*/
/*const month = prompt("enter month");
if(month==="January" || month==="March"|| month==="May"||month==="July"||month==="August"||month==="October"|| month==="December" ){
    console.log(`${month} has 31 days`);
}
if(month==="September" ||month==="April"||month==="June"||month==="November" ){
    console.log(`${month} has 30 days`);
}
if(month==="February"){
    console.log(`${month} has 28 days`);
}*/

/*const year = Number(prompt("enter year"));
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("its leap year")
}
else{
    console.log("not")
}*/

const day = prompt("enter day")
if(day==="monday"|| day==="tuesday"|| day==="wednesday"|| day==="thursday"|| day==="friday"){
    console.log("this month is working day");
}
else{
    console.log("this is weekend");
}

