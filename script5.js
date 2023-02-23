Do the below programs in arrow function
a.Print odd numbers in an array

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
var odd=(arr)=>{
    
for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd1.push(arr[i]);
    }
}return odd1;
};
var odd1=[];
console.log(odd([1,2,3,4,5,6]));
});

b.Convert all the strings to title caps in a string array.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
var name=(arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
       
}
 return arr.join(' ');
}
console.log(name(['guvi','geek']));
});


c.Sum of all numbers in an array.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
    //var num=parseInt(userInput[0])
    //var arr1=userInput[0].split('').map(Number);
var sum=(arr)=>{
    for(let i=0;i<arr.length;i++){
        add=add+arr[i]
        
    }
 return add;
}
var add=0;
console.log(sum([1,2,3,4]));
});

d.Return all the prime numbers in an array.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
    //var num=parseInt(userInput[0])
    //var arr1=userInput[0].split('').map(Number);
var prime=(arr)=>{
    for(let i=0;i<arr.length;i++){
        var count=0;
       for(let j=1;j<arr.length;j++){
           if(arr[i]%j===0){
               count++;
           }
       }
           if(count===2){
             a.push(arr[i]);
           }
         } 
         return a;
};
var a=[];
console.log(prime([1,2,3,4,5,6,7,8]));
});


e.Return all the palindromes in an array


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var palindrome=(arr)=>{
 var a,b;
 var final1=[];
 var final=[];
 for(let i=0;i<arr.length;i++){
     a=arr[i].split('');
     b=a.reverse().join('');
     final.push(b);
     for(let j=i;j<final.length;j++){
         if(arr[i]===final[j]){
             final1.push(arr[i]);
         }}
     }
     return final1;
 };
 console.log(palindrome(['rad','tat','malayalam']));
    
});