// const arr=[2,4,1,20,8];

// arr.sort((a,b)=>a-b);

// console.log(arr)
console.log(name);
var name="Virat";


// Name();
// function Name(){
//     let name="Rohit";
//     console.log(name)
// }
// 
function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a digit between 0-9
    }
    return otp;
}

console.log(generateOTP(6)); // Example: 48291

//hoisting
console.log(a);
var a=5;//out-undefined because that the js interpreter assume the var a in line one

// console.log(b);//b is not defined

// console.log(c);//Cannot access 'c' before initialization
// let c=5;
// console.log("+" +true)
// for(let i=1;i<5;i++){
// console.log(i)
// }

// const arr=[1,2,3,4,5];
// console.log(arr.indexOf(5));
// let mobiles=["Realme","Apple","Mi","Pixel","Nothing"]
// console.log(mobiles.toString());


// let cars=["Tata","Kia","Toyota"];
// let supercars=["G-Wagon","Ferrari",];
// let suv=["Fourtuner","Defender"];

// let newcar=supercars.concat(suv);
// console.log(newcar);




// let arra=['Microsoft','Google','Uber','IBM','Amazon','Flipkart']
// arra.splice(1,1,8);
// console.log(arra);

// function myfun(){
//     console.log("Hello");
// }
// myfun(); // This is function call

// function sum(a,b){
//             console.log(a+b);
// }
// sum(3,4);
console.log(x);  
var x = 5;


