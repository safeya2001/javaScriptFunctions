let x=5;
let y=7;
let i;

// /////Swap Two Variables
// function swap (x,y){
// i=x;
// x=y;
// y=i;
// console.log(("x=" +x+"   y= "+y));
// return (x,y)
// }
// swap(2,3);
////////////////////////////////////////////////////////////

// // //Check if a Number is Odd or Even
// function Sections(x){
// if (x%2==0)
//     return("Even > Section A")
// else
// return("Odd > Section B")
// }
// console.log(Sections(3))
/////////////////////////////////////////////////////

// //Factorial of a Number


// function Factorial(x) {
//   let factorial = 1;
//   for (let i = 1; i <= x; i++) { 
//     factorial = factorial * i;}
//   return factorial;}

// console.log(Factorial(10));

///////////////////////////////////////////////////////////

// //Palindrome Check
// function Palindrome (arr){
// let str = arr.toString();
// let reversed = str.split('').reverse().join('');
// if( str === reversed)
//   return ("Palindrome");
// else   return (" Not Palindrome");}


/////////////////////////////////////////////////////////////////////////////////

// //Find the Largest of Three Numbers
// function LargestNum (x,y,z){
// let largest;
// if(x>y){
//     largest=x;}
// else{
//     largest=y;}
// if(z>largest){
//    largest=z;}
// else{
//     largest=largest;}

// return largest;}



/////////////////////////////////////////////////////////////////

//Fibonacci Sequence
function Fibonacci(){}



///////////////////////////////////////////////////////////////////
//Sum of Digits
// function sumOfDigits(x){
//      let str = x.toString();
// let split=str.split('');

// let sum=0;
// for (let i=0;i<split.length;i++)
//      sum=Number(split[i])+sum;
// return sum;
        
// }
//////////////////////////////////////////////////////////////////////////



// //Check Prime Number
// function prime(x){
//     let result;
// for(let i=2;i<x;i++)
//     if(x%i==0){
//         result="not prime";
//           break;}
//     else{
//         result="prime";}
// return result;

// }
// console.log(prime(10));
// console.log(prime(7));
//////////////////////////////////////////////////////////////////////////
// //Reverse a String
// function Reverse(y) {
//   let x = y.toString();
//   let reversed = x.split('').reverse().join('');
//   return reversed;
// }

// console.log(Reverse("ewfw")); 

////////////////////////////////////////////////////////////////////////////
//
// //Factorial of a Number

// let factorial=1;
// function Factorial (x){
//     for(let i=1;i<x;i++)  
//         factorial=factorial*i;
// return factorial;
////////////////////////////////////////////////////////////////////////////////
// //Find GCD
// function gcd(x, y) {
//   while (y) {
//     let temp =y;
//     y = x %y;
//     x = temp;
//   }
//   return x;
// }
// console.log(gcd(18,12))
///////////////////////////////////////////////////////////////////////////////
// //Check if a Number is Perfect
// function Perfect(n){
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) sum += i;
//   }
//   return sum == n;
// }
// console.log(Perfect(6))

/////////////////////////////////////////////////////////////////////////////////////

// //Find the LCM of Two Numbers
// function lcm(a, b) {
//   let max = Math.max(a, b);
//   while (true) {
//     if (max % a === 0 && max % b === 0) {
//       return max;
//     }
//     max++;
//   }
// }
// console.log(lcm(4,6))
//////////////////////////////////////////////////////////////////////////////////////////////////
// //Remove Duplicates from an Array
// function removeDuplicates(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < unique.length; j++) {
//       if (arr[i] === unique[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       unique.push(arr[i]);
//     }
//   }

//   return unique;
// }
///////////////////////////////////////////////////////////////////////////////
// // //Sum of Elements in an Array
//  function sumArray(arr) {
//   let sumation=0;
//   for (let i = 0; i < arr.length; i++) 
//     sumation=sumation+arr[i];
//   return sumation;}

// console.log(sumArray([5, 4, 3]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////Find the Maximum Number in an Array

// function findMaximum(arr) {
//     let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];}}
//   return max;
// }
// console.log((findMaximum([1,2,3,7,11,2])))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///17.                   Find the Minimum Number in an Array 
// function findMinimum(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];}}
//   return min;
// }
// console.log(findMinimum([1,2,3,10,0]))
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///18.              Find the Common Elements Between Two Arrays 
// function commonsbetweenarrayss(arr1, arr2) {
//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);
//   let result = [];
//   for (let item of set1) {
//     if (set2.has(item)) {
//       result.push(item);}}
//   return result;}
// console.log(commonsbetweenarrayss([1,2,3,4,5],[5,6,7,8,9]))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// 19.              Count the Occurrences of a Value in an Array 
// function Occurrences(arr, x) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       count++;}}
//   return count;
// }
// console.log(Occurrences([1,1,22,3,1],1))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////           20.                Find the Index of an Element in an Array 
// function findIndex(arr, indx){
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === indx)
//       return i;}}
// console.log(findIndex ([1,2,4,99],2))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// //        ///.                           Sort an Array in Ascending Order 
// function sortAscending(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;}}}
//   return arr;
// }
// console.log(sortAscending([1,2,8,9,0,11]))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //   //     22.                           Convert a String to an Array 
// function stringToArray(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i]);}
//   return result;}
// console.log(stringToArray("sadxa"));
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /        23.                            Join an Array into a String 
// function JoinanArray (arr){
//     let str="";
//      for (let i = 0; i < arr.length; i++)
//         str=str+arr[i];
// return str;
// }
// console.log(JoinanArray(["s","a","f"]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 24.                                      Find the Length of a String 
// function LenOfStr(str){
// let count=0;
// for(let i in str)
//     count++;
// return count;}
// console.log(LenOfStr("safeya"))
////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// //    //      25.                               Convert a String to Uppercase 
// function  Uppercase(str) {
//   return str.toUpperCase();
// }
// console.log(Uppercase("dcac"))
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// //   //     26.                               Convert a String to Lowercase 
// function Lower(str) {
//   return str.LowerCase();
// }
// console.log(Lower("ASkjbkJa"))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // //    27.                         Check if a String Contains a Substring 
// function ContainsaSubstring(str, substr) {
//   return str.includes(substr);
// }
// console.log(ContainsaSubstring("dscsc sa", "sa"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //     //  28.                            Remove Whitespace from a String 
//                             function removeWhitespace(str) {
//   return str.trim();
// }
// console.log(removeWhitespace(" safeya "))
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
// //  //     29.                Get the Character at a Specific Index in a String 
// function CharAtSpecIndex(str, indx) {
//   for (let i = 1; i < str.length; i++) {
//     if (i === indx) {
//       console.log(str[i]);
//     }
//   }
// }
// console.log(CharAtSpecIndex("efveve",5))

/////////////////////////////////////////////////////////////////////////////////////////
//  //   30.              Check if a String Starts with a Specific Substring 
// function StartswithSubstring
// (email, x) {
//   return email.startsWith(x);
// }
// console.log(StartswithSubstring(("EFVWRFW","FW")));
/////////////////////////////////////////////////////////////////////////////////////////////
// //  ///31.                Check if a String Ends with a Specific Substring 
// function StringEnds(filename, extension) {
//   return filename.endsWith(extension);
// }
// console.log(StringEnds("EFVWRFW","FW"))
 ////////////////////////////////////////////////////////////////////////////////////////////////
// //  //  32.                          Extract a Substring from a String 
// function ExtractSubstring(message, length) {
//   return message.substring(0, length);
// }
// console.log(ExtractSubstring("EWKLDMWLMDP",5))
//////////////////////////////////////////////////////////////////////////////////////////////////
// //       33.                                   Create a Countdown Timer 
// function CountdownTimer(){
//     for(let i=10 ;i >= 0;i--){
//       //console.log(i)
//    setTimeout(() => {
//       console.log(i);
//     }, (10 - i) * 1000);
//   }

// }
// console.log(CountdownTimer());
/////////////////////////////////////////////////////////////////////////////////////////////////
// //       34.                        Random Number Between Two Values 
// function RandomNum(x,y){
//     let i=Math.random()* (y - x) + x;
//     return i
// }
// console.log(RandomNum(3,9))
//////////////////////////////////////////////////////////////////////////////////////////////////
// ///  35.                              Convert a Number to a String 
// function numtostring(x){
// return String(x);

// }
// console.log(numtostring(4525));
////////////////////////////////////////////////////////////////////////////////////////////////////
// // //   36.                                 Convert a String to a Number 
// function StringToNum(x){
//     return (Number(x))
// }
// console.log(StringToNum("32979"))
///////////////////////////////////////////////////////////////////////////////////////////////////////
// //  // 37.Get the Current Date and Time 
// function dateAndTime(){
// const date=new Date;
// let year=date.getFullYear();
// let month =date.getMonth();
// let day = date.getDay();
// let hours=date.getHours()
// let min= date.getMinutes();
// let sec =date.getMilliseconds()
//  let fullResult="today is"+year+"/"+month+"/"+day+  "  and time is : " +hours+":"+min+":"+sec;

// return fullResult


// }console.log(dateAndTime());
///////////////////////////////////////////////////////////////////////////////////////////////
//      38.                                 Get the Day of the Week 
// function day(){
//     const todays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const day=new Date;
// const days=day.getDay();
// return (todays[days])}

// console.log(day())
///////////////////////////////////////////////////////////////////////////////////////////////////
//   // 39.  Check if an Array Contains a Specific Element 
// function SpecificElement(x,y){
//     for(let i=0;i<y.length;i++){
//         if(x===y[i])
//             return true;
//     }return false;
//     }

//  console.log(SpecificElement(1,[1,2,3,4,5,6]));
