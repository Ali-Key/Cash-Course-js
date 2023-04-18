// console.log(" Ali Omar !");

// String , num , flot, Boolean
// let Name = "Ali";
// let Age = 19;
// const Year = 2023;


// console.log(Name);
// console.log(Age);
// console.log(Year);




// Opretor
// let Name = "Ali";
// let x = 10;
// let y = 20;

// x += 10;
// y -= 3;
// x *= 4;
// y /= 10;

// let mod = 10 & 3;
// console.log(x);
// console.log(y);
// console.log(mod); 

//athematic opretors

// let x = 7;
// let y = 10;
// let result = y + x
// let result = y - x
// let result = y * x
// let result = y / x
// let result = y % x

// console.log(result);


// compratisom operator
// let x = 4;
// let y = 5;

// ==  Equal
// !=  Not Equal
// === Strict Equal
// !== Strict not Equal
// >   great than 
// >=  great than or equal
// <   less than 
// <=  less than or equal

// console.log(4 != 5);

// logical Opretors

// logical AND (&&) t / t true ,  t / f false
// logical OR (||) t / f true ,  f / f false
// logical NOT (!) f /  true ,   t false

// let x = true && false;
// let y = true || false;
// let z = !false;

// console.log(x, y, z);

// Control Flow 
// let Age = 18;
// if else 

// if (Age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// else if
// Gender
// let Gender = "Male";

// if (Gender === "Male") {
//     console.log("You are Male");
// } else if (Gender === "Female") {
//     console.log("You are Female");
// } else {
//     console.log("You are not eligible to vote");
// }

// switch
// const Pin = 123;
// switch (Pin) {
//     case 123:
//         console.log("Haragaag waa $300");
//         break;
//     case 456:
//         console.log("Haragaag waa $500");
//         break;
//     case 789:
//         console.log("Haragaag waa $700");
//     default:
//         console.log("Haragaag waa $1000");
// }

// Loops
// for
// let number = prompt("Enter a number: ");

// for (let number = 1; number < 10; number++) {
//     if (number % 2 == 0) {


//         console.log("The number is even:" + number);
//     } else {
//         console.log("The number is odd:" +
//             number);
//     }
// }

// while
// let number = 1;
// while (number < 10) {

//     number++;
//     if (number % 2 == 0) {
//         console.log("The number is even:" + number);
//     } else {
//         console.log("The number is odd:" +
//             number);
//     }

// }

// do while
// let number = 0;
// do {
//     number++;
//     if (number % 2 == 0) {
//         console.log("The number is even:" + number);
//         // break;
//         // continue
//     } else {
//         console.log("The number is odd:" +
//             number);
//     }

// } while (number < 10);


// function (Name, Age)  {

 
//     return  result;
// }
// let result = {'Your name is ' + Name + ' and age is ' + Age}; 

// console.log(result);

/*function 
function and arrow function 
callback function 
arguments 
rest vs spread operator */

// Rentangle function

// function Rentangle (W,L){

//     let GetArea = W* L;
//     let result = GetArea;
//     return GetArea ;

    


// }

// console.log("the rentangle area is:" +Rentangle(12,4));



// and arrow function 
// let getpramiter (W,L)=> {

//     return W+L;
// }
// let result= getpramiter (50,10)
// console.log(result)

// callback function 

// function MyFun (callback, Name){
//     callback('Your name is: ${name}');
// }
// function MyCallback (str ) {
//     console.log(str);
// }
// MyFun(MyCallback, "Ali Omar");
 

// callback function  

// function MyFun (callback, Name){
//     callback('Your name is : ' + Name);
//     // callback('Your name is : ${name}');
// }

// MyFun( (str ) =>{
//     console.log(str);
// }, "Ali Omar");



// arguments 


// function MyFunction(){
//     console.log(arguments);
// }
// MyFunction( "Hello, world!")

// function MyFunction(){
//     console.log(arguments);
// }
// MyFunction()=>{
//     console.log( "Hello, world!")
// }

 // rest   sum

//  function sum (...Numbers){


//     return Numbers.reduce((total,num) =>{


//         return( total +=num);
//     },1);
//  }
//  console.log("The sum of total numbers is :"+ sum(8,9,0,8));


// Mult

//  function sum (...Numbers){


//     return Numbers.reduce((total,num) =>{


//         return( total +=num);
//     },1);
//  }
//  console.log("The sum of total numbers is :"+ sum(8,9,0,8));
 
 

//  spread operator

// let Arraynumber = [1,2,3,4,5,6,7,8];
// let ArrayString= ["Ali "];

// let spreadarray=[Arraynumber, ArrayString]; Array inside another array
// let spreadarray = Arraynumber.concat( ArrayString);  concat array



// let Array3=[...ArrayString,...Arraynumber, "Omar",9,12];
// console.log(Array3);


// Array helpprs
// filter,
// findj,
// foreach, 
// map,
// reduce



// let array= [1, 2];

// let result = array.forEach((num,index)=>{
//     console.log('index: ${index} value ${num}');
// });
   


// filter


// let Arraynumber= [100,900,90,,70];

// let result = Arraynumber.filter(num =>num =90);

// console.log(result);

// map
// let array = ["Ali","Omar"];
// let result = array.map(items => <span>span 
//     ${items.val}</span>);
// console.log(result);

// reduce

// let num =[1,2,4];
// let result = num.reduce((total,sum) => {
//     total +=sum;
//     return total;
// },0);
// console.log("the of arry numbers is :" +result);

// reduce
// let Students =[
//     {ID : 1 , Name :"Ali", Class: "CA208" },
//     {ID : 2 , Name :"Moha", Class: "CA208" },
//     {ID : 3 , Name :"Abdi", Class : "CA208" },
//     {ID : 4 , Name :"Abuukar", Class: "CA208" },
// ];
// let Display = Students.reduce((classes, student)=>{
//     classes[student.ID] =6 ;
//     return classes;
// },{});
// console.log(Display);


// Destructuring.
let mySchool = {
    Name:"Somali developers",
    Phone:+25261731232,
    Description:"Young Generations developers",
    Manager:"Ali Omar",
    Address:["Hodan Mogadishu Somalia", "Islii Niarobi Kenya"],

    Courses:{
        frontend:["Html" , "css","tialwind css","js","react" ],
        backend:["php","mysql","node.js"],
    },
};

//  let {Name}= mySchool;
// let {courses:{
//     frontend:[f1],

// }}= mySchool;
// console.log(f1);

// function CompanyConutries({Address}){
//     // console.log(Address);

//     let Cour = Address.map(add => add.split(" ")[2]);
//     // return Course;
//     console.log(Cour);

// }
// CompanyConutries(mySchool);


// Classes

class myCompany {
    constructor(Company){
        console.log(this);
        this.Name=Company.Name;
        this.Phone=Company.Phone;
        this.Description=Company.Description;
        this.Manager=Company.Manager;
        this.Address=Company.Address;
        this.Courses=Company.Courses;
    }
     Countries (){
        let country =this.Address.map(add => add.split(" ")[2]);
        console.log(country);
        return null;

       
     }

}
let Dugsiyo = new  myCompany ();
console.log(Dugsiyo.Address);



 

