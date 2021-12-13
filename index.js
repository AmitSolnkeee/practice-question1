//--------------------------- Question:1--------------------------------//
//Find the second Highest element from the array  const arr = [12, 35, 1, 10, 34, 1] 
{
const arr = [12, 35, 1, 10, 34, 1] 
arr.sort((a,b)=>b-a)
const arr1=arr[1]
console.log(arr1)
}


//----------------------------- Question : 2------------------------------//
//Program to find out prime numbers in a given array.
{
const arr = [2,3,4,5,6,7,8,9,88,99];
const primeArr=n=>{
  isPrime = true;
  for(let i=2; i<n ; i++){
    if(n % i === 0){
      isPrime = false;
      break;
    }
  }
    if(isPrime === true){
      return n;
    }
}
const brr = arr.filter(elm=>primeArr(elm));
console.log(brr);
}

//-------------------------------Question----------------------------------------//
//Write a program to find the sum of two arrays
{
const arr = [2,3,4,5,9,9];
const brr = [4,5,6,7,8];
const sum = arr.reduce((accumulator,current) =>{
    return accumulator + current;
});
const result = brr.reduce((accumulator,current) =>{
    return accumulator + current;
},sum);
console.log(result);
}

//-------------------------------Question:--------------------------------------//
//Write a program for addition of each index of two array 
{
const arr = [2,3,4,5,9,9];
const brr = [4,5,6,7,8];
let sum = [];
(arr.length > brr.length) ? sum = arr.map((elm,idx)=> elm + (brr[idx] || 0)) : sum = brr.map((elm1,idx)=> elm1 + (arr[idx] || 0)) ;
console.log(sum)
}

//---------------------------------QUestion----------------------------------------//
//Arrange the number into descending order
{
  const arr = [5,56,78,232,4,32,21,78,54,43];
  const result = arr.sort((a,b)=>b-a);
  console.log(result);
}

{
  //Write a function which takes an array and returns the sum of max, min values in that array, finally attach this to a prototype object.
  class Child{
    constructor(){ 
    }
    sum_val(arr){
      const val = arr.sort((a,b)=>b-a);
      const sum = val[0] + val[val.length-1]
      return sum
     }
  }
  const obj = new Child();
  obj.sum_val([3,6,4,9,15,4,8])
  console.log(obj)
}
