Do the below programs in IIFE function
a.Print odd numbers in an array

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
(function odd(arr){
    var a=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            a.push(arr[i]);
        }
         
    }
  console.log(a); 
})([1,2,3,4]);
 
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
(function name(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
       
}
 console.log(arr.join(' '));
})
(['guvi','geek']);
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
(function sum(arr){
    var add=0;
    for(let i=0;i<arr.length;i++){
        add=add+arr[i];
    }
console.log(add);
})([1,2,3,4]);


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
(function prime(arr){
    var a=[];
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
         console.log(a);
}) ([1,2,3,4,5,6,7,8]);
});

e.Return all the palindromes in an array

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
(function palindrome(arr){
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
     console.log(final1);
 })
 (['rad','tat','malayalam']);
    
});

f.Remove duplicates from an array.


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
      (function removeDuplicates(arr) {
        console.log([...new Set(arr)]);
    })
      
    ([1,2,1,3,4,5,5,6,3]);

 
});

g.Return median of two sorted arrays of the same size.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    (function median(arr1,arr2){
  let arr3=[...arr1,...arr2];
 let arr=arr3.sort();
 console.log(arr);
  var median1;
  //var middleindex;
  if(arr.length%2!=0){
   let middleindex=Math.floor(arr.length/2);
median1=arr[middleindex];

}else{ 
let  middleindex1=Math.floor(arr.length/2);
    median2=(arr[middleindex1]+arr[middleindex1-1]);
    median1=median2/2;
    
   }
   console.log(median1);

    })
  ([9,1,3,3],[2,6,7,8]);

});

h.Rotate an array by k times. 

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  (function rotate(arr,k){
   var empty1=[];
   var x=arr.slice(k);
   
   for(let i=0;i<k;i++){
       empty1.push(arr[i]);
   }
   
  console.log([...x,...empty1]);
  })
  ([1,2,3,4,5,6,7],3)
    
});

