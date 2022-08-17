//printOnetoFive using let keyword

function printOneToFive() {
  for(let counter=0; counter<=5; counter++) {
    setTimeout(function() {
      console.log(counter);
    }, counter*1000);
  }
}

//printOneToFive using var keyword

function printOneToFiveDiff() {
  function clos(param) {
    setTimeout(function(){
      console.log(param);
    }, param*1000);
  }
  for(var counter=0; counter<=5; counter++) {
    clos(counter);
  }
}

//fb like and disklike button implementation

class likeFeature {
  private likeCounter: number = 0;
  private isSelected: boolean = false;
  
  likePost() {
    this.likeCounter++;
    this.isSelected = true;
  }
  
  disLikePost() {
    this.likeCounter--;
    this.isSelected = false;
  }
  
  showCurrentLikes() {
    console.log(this.likeCounter);
  }
}

// closure

function counter() {
  var count = 0;
  return function clos() {
    count++;
    console.log(count);
  }
}

const fn = counter();

// currying

function addO(numOne) {
  return function(numTwo) {
    return numOne+numTwo
  }
}


//coercion

function logger() {
  let x = 3;
  console.log(x);
  x = 'human';
  console.log(x);
}

// remove duplicate numbers from number array

function removeDuplicateNumber(numArray) {
  return [...new Set(numArray)];
}

// remove duplicate numbers from number array using filter

function removeDuplicate(numArray) {
  return numArray.filter((val, index) => {
    return numArray.indexOf(val) == index;
  });
}

// sort an array of numbers

function customSort(numArray) {
  return numArray.sort();
}

// sort an array of characters

function charSort(stringArray) {
  return stringArray.sort();
}

// microtask queue priority example

function show() {
  console.log('first');
  
  setTimeout(function() {
    console.log('second');
  }, 1000);
  
  new Promise((resolve, reject) => {
    resolve('third');
  }).then((val) => console.log(val));
  
  console.log('fourth');
  
}

// hoisting

function hois() {
  console.log(a);
  var a = 5;
  console.log(a);
}

// temporal dead zone

function temp() {
  console.log(a);
  let a;
  console.log(a);
  a = 5;
  console.log(a);
}


// first class or higher order function

function hf(aFn) {
  aFn();
}


// function expression

const a = function() {
  console.log('function expression');
}

//function declaration or defnition

function add(a, b) {
  return a+b;
}

// observable example

const obs = new Observable((subscriber) => {
  subscriber.next('one');
  subscriber.next('two');
  subscriber.complete();
});


// remove given item from array using filter

function removeItem(arr, item) {
  return arr.filter((val) => val !== item);
}

// remove given item from array using splice

function removeItem2(arr, item) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
  return arr;
}

// prototypal inheritance using direct proto

const obj = {
  name: "Adarsh",
  city: "Ayodhya",
  getIntro: function() {
    console.log(this.name + "from" + this.city);
  }
}

const obj2 = {
  name: "Anmol"
}

obj2.__proto__ = obj;

obj2.city
obj2.getIntro();

// prototypal inheritance using Object.create

function car(name) {
  console.log(name + "car");
}

car.prototype.show = function() {
  console.log('show');
}

function eCar(name) {
  console.log(name + "eCar");
  this.showExt = function() {
  console.log('showExt');
}
}

eCar.prototype =  Object.create(car.prototype);

const e = new eCar("tata");
e.show();
e.showExt();


// shallow copy of an object

const ObjectOne = {
  name: "Adarsh",
  location: "Bengaluru"
}

const objP = {
  ...ObjectOne
}

// deep copy of an object

const newObj = {
  name: 'Adarsh',
  location: 'Bengaluru'
  address: {
  	pincode: '1234',
  	color: 'red',
  }
}

const objNew = JSON.parse(JSON.stringify(newObj));

/** call, apply, and bind example **/

// call

const info = {
  fName: "Adarsh",
  lName: "Pandu",
  getInfo: function(location, age) {
    console.log(this.fName + " " + this.lName + " from " + location +  age);
}
}

const anotherInfo = {
  fName: "Anmol",
  lName: "Pando"
}

info.getInfo.call(anotherInfo, 'ben', '23');

// apply example

info.getInfo.apply(anotherInfo, ['ben','23'])


//bind example

const fnUpdated = info.getInfo.bind(anotherInfo, 'mumbai', '23');
console.log(fnUpdated())

//unicast and multicast

const ob = new Observable((subscriber) => {
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});


// freeze exammple

const uniqObj = {
   name: "Adarsh"
}

Object.seal(uniqObj);
uniqObj.name = "Anmol";
uniqObj

// spread operator

const un1 = ['a', 'b', 'c'];
const un2 = [...un1];


// short circuiting

console.log('example 1', true || undefined);
console.log('example 2', undefined && true);
console.log('example 3', true && 'string' && undefined && true);
console.log('example 4', false || 'string' || undefined || true);


// nullish coalescing operator
// nullish values are only null and undefined
const isTrue = 0 ?? '2';
console.log(isTrue);

//for-of loop example
const cars = ['ferrari', 'ducat', 'tesla'];
for(const car of cars) {
  console.log(car);
}

/** enhanced object literals example **/

//old object literal example
const oldObject = {
  firstName: 'Adarsh',
  lastName: 'Pandey',
  getName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

// above example as per new syntax

const newObject = {
  firstName: 'Adarsh',
  lastName: 'Pandey',
  getName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}


// Fetch Object.keys, Object.values, and Object.entries

const houseObj = {
  title: 'Pandey Niwas',
  area: '15000 sq feet',
  location: 'Indira Nagar Lucknow'
}

for(let key of Object.keys(houseObj)) {
  console.log(key);
}

for(let key of Object.values(houseObj)) {
  console.log(key);
}

const entries = Object.entries(houseObj);
console.log(entries);

for(let [x,y] of entries) {
  console.log(x,y);
}

/** Set **/

// creation of set
const orderedSet = new Set([1, 1, 2, 3, 4, 5, 5]);
console.log(orderedSet);

// size of set
console.log(orderedSet.size);

// find set has specific value or not
console.log(orderedSet.has(1));

// add value in set
console.log(orderedSet.add(6))

// deleted value from set // note - delete will return it element is successfully deleted
console.log(orderedSet.delete(2))

// looping set
for(const x of orderedSet) {
  console.log(x);
}

//remove all the elements from set
console.log(orderedSet.clear())


/** Map **/

// create map

const foodList = new Map([
['Potato', '1kg'],
['Tomato', '2kg']
]);

// use of some method

const ada = [2,3,4,5,6,6];
ada.some(val => val === 6);
ada.some(val => val === 0);

// use of every method

const adm = [2,2,2,2,2,2];
adm.every(val => val ===2);
adm.every(val => val ===3)

// use of flat method

const uti = [1, [2, 3], [4, 5], 6];
uti.flat()

const con = [1, [[2,3], [4,5]], 6]
con.flat()
con.flat(2) // here argument value is deep level for flattening

// use of fill method

const bti = new Array(7);
bti.fill(1)


// Array.from

const com = Array.from({length: 7}, () => 2);
console.log(com)

// create array having elements 1 to 7

const zz = Array.from({length: 7}, (curr, i) => i + 1);
console.log(zz);


// convert sentence into title case using reduce

let str = 'this is a title case';
const resultStr = str.toLowerCase().split(' ').reduce((acc, word) => {
  return acc + word[0].toUpperCase() + word.slice(1) + ' ';
}, '');
resultStr


// find max number from array with Math.max

const pp = [22, 11, 1, 0];
const maxHai = Math.max(...pp);
console.log(maxHai);

// find min number from array with Math.min

const nn = [22, 11, 1, 0];
const minHai = Math.min(...nn);
console.log(minHai);


// how to find current time stamp

console.log(Date.now());


// print current date in dd/mm/yyyy format

const todayDate = new Date();
console.log(`${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`)


// setTimeout timer runs for definite time
setTimeout(() =>  console.log('call me'), 1000);

// setInterval keeps running forever until we stop it
// setInterval(function() {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}: ${now.getSeconds()}`)
// }, 3000);


// create object using constructor function

const Person = function(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName
}

const john = new Person('John', 'Doe');
console.log(john);



// input RedIsGreat -> output Red Is Great

const replaceCamelWithSpaces = (inputString) => {
 return inputString.replace(/\B([A-Z])\B/g/, ' $1');
}


function isPrime(n) {
  let divisor = 2;
  while(n > divisor) {
  	if(n % divisor === 0) {
  		return false;
  	} else {
  		divisor++;
  	}
  }
  return true;
}


// find fibonacci of n - 0(n)

function fibonacci(n) {
 let fibo = [0,1];
 if(n <=2) return 1;
 
 for(let i =2; i<=n; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2];
 }
 
 return fibo[n];
}


// recursive way implementation of fibonacci - 0(2^n)

function fibonacci(n) {
if(n<=1){
 return n;
} else {
 return fibonacci(n-1) + fibonacci(n-2);
}
}

// reverse a string

function reverseString(str) {
	let resultStr = '';
	for(let i=str.length-1; i>=0;i--) {
		resultStr = resultStr + str[i];
	}
  return resultStr;
}

// recursive reverse string

function reverseStringRecursive(){
	if(str === ''){
	return '';
	} else {
	return reverse(str.subStr(1) + str.charAt(0));
	}
}


// reverse words

function reverseWords(str){
  return str.split('').reverse();
}


// check palindrome

function checkPalindrome(str) {
 return str == str.split('').reverse().join('');
}


// count zeros

function countZero(n) {
 let count = 0;
 while(n>0) {
  count = count + Math.floor(n/10);
  n = n/10;
 }
 
 return count;
}

// check when document is ready

function isDocumentReady() {
 return document.readyState === 'complete' || document.readyState === 'interactive';
}


//another way to check dom got loaded

document.addEventListerner('DOMContentLoaded', fn, false);



// find palindrome using stack
function isPalindrome(inputStirng: string): boolean {
  if(!inputStirng || typeof inputStirng !== 'string') {
    return;
  }

  let letters: string[] = [];
  let reverseString: string = ''; 

  //push elements into stack
  for(let i=0; i<inputStirng.length; i++) {
    letters.push(inputStirng[i]);
  }

  //pop
  for(let j=0; j<inputStirng.length; j++) {
    reverseString = reverseString + letters.pop();
  }

  console.log(reverseString);
  return reverseString === inputStirng;
}


//implementation of stack;

class Stack {
    
    arr: any[] = [];
    constructor() {
    }
    
    getlength(): number {
        return this.arr.length;
    }
    
    pushElement(num: number): number {
        this.arr.push(num);
    }
    
    popElement() {
        if(this.arr.length <= 0) return;
        this.arr.pop(this.arr.length - 1);
    }
}

const myStack = new Stack();
console.log(myStack.length);
myStack.pushElement(1);
myStack.pushElement(2);
myStack.popElement();
console.log(myStack);


// Queue implementation
class Queue {
    private _myQueue: any[] = [];
    
    print(): any[] {
        return this._myQueue;
    }
    
    enqueue(item: any): any {
        this._myQueue.push(item);
    }
    
    dequeue(): any {
        const deletedItem = this._myQueue.shift();
        return deletedItem;
    }
    
    front() {
        return this._myQueue[0];
    }
    
    size(): number {
        return this._myQueue.length;
    }
    
    isEmpty(): boolean {
        return this._myQueue.length === 0;
    }
}

const lineQueue = new Queue();
console.log(lineQueue.print());
lineQueue.enqueue(2);
lineQueue.enqueue(3);
lineQueue.dequeue();
console.log(lineQueue.size());
console.log(lineQueue.isEmpty());
console.log(lineQueue.print());


// reverse by separator

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseBySeparator('Welcome to this Javascript Guide!', ' '));


// Welcome to this Javascript Guide! -> emocleW ot siht tpircsavaJ !ediuG
function playReverse(inputString: string): string {
    if(!inputString || typeof inputString !== 'string') {
        return;
    }
    let result = inputString;
    result = result.split(' ').map(str => str.split('').reverse().join('')).join(' ');
    return result;
}


// how to check arr is Array
Array.isArray(arr);


// How to empty an array in JavaScript?

arrayList.splice(0, arrayList.length);


// How would you check if a number is an integer?

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false



// anagram
function isAnagram(strOne: string, strTwo: string): boolean{
    if(!strOne
    || !strTwo 
    || typeof strOne !== 'string'
    || typeof strTwo !== 'string') {
        return false;
    }
    strOne = strOne.toLowerCase().split('').sort().join('');
    strTwo = strTwo.toLowerCase().split('').sort().join('');
    console.log(strOne, strTwo);
    return strOne === strTwo;
    return true;
}

console.log(isAnagram('Mary', 'Army'));


// What are the possible ways to create objects in JavaScript

// method 1
let obj1 = new Object();
let obj2 = Object.create(null);
let obj3 = {};


// method 2
function Person(name) {
// constructor function way to create object
 this.name = name;
 this.age = 21;
}
let object = new Person('Sudheer');

// method 3
class Car {
constructor(){}
}

const newCar = new Car();

// method 4 Singleton Pattern

let Obj5 = new (function(){
this.name = 'Sudheer';
})();

// purpose of array slice method
// The slice() method returns the selected elements in an array as a new array object. 

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// Note: Slice method won't mutate the original array but it returns the subset as a new array.


// purpose of splice method
// The splice() method is used either adds/removes items to/from an array, and then returns the removed item.

let arrayIntegersOriginal1spl = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2spl = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3spl = [1, 2, 3, 4, 5];

let arrayIntegers1spl = arrayIntegersOriginal1spl.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2spl = arrayIntegersOriginal2spl.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// Note: Splice method modifies the original array and returns the deleted array.


// delete item from array
function deleteItem(arr: any[], item: any): any {
    // splice(position, number of items needs to be deleted)
    let deletedItem = arr.splice(arr.indexOf(item), 1);
    return deletedItem;
}

let m = [2,4,5,6]; 
console.log(deleteItem(m, 5));
console.log(m)

// find an element in array

function finElement(arr, el: number): boolean {
    return arr.some(num => num === el);
}

console.log(finElement([2,4,5], 5))

// should be multiple of 2
function finElement(arr): boolean {
    return arr.every(num => num%2===0);
}

console.log(finElement([2,4,8]))


//infinite currying in JS using recursion

function add(a) {
    return function(b) {
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(2)(4)(5)())

// IIFE
// The primary reason to use an IIFE is to obtain data privacy because any variables declared 
//within the IIFE cannot be accessed by the outside world. i.e, If you try to access 
//variables with IIFE then it throws an error as below,

(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); //Error: message is not defined


/** 
Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.
*/

const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached


// localStorage

localStorage.setItem('name', 'Adarsh');
localStorage.getItem('name');

// sessionStorage
sessionStorage.setItem('name', 'Adarsh');
sessionStorage.getItem('name');
sessionStorage.clear();


// hello -> Hello
function play(str) {
    let firstLetter = str.split('')[0]; 
    return firstLetter.toUpperCase()+str.slice(1, str.length);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(play('hello'));


// find min and max
var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min(...arr);
}
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMin(marks));
console.log(findMax(marks));


// swap two numbers without using third one

function swapIt(x, y) {
  [x,y] = [y,x];
  console.log(x,y);
}

swapIt(5,6);


//check if array contains duplicate item or not
function containsDuplicate(nums: number[]): boolean {
 return (new Set(nums)).size !== nums.length;
};

console.log(containsDuplicate([1,2,3,4]));


// promises
const promisify = (item, delay) =>
new Promise(resolve => setTimeout(() => resolve(item), delay));
const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);
async function parallel() {
const promises = [a(), b(), c()];
const [output1, output2, output3] = await Promise.all(promises);
return `parallel is done: ${output1} ${output2} ${output3}`;
}
async function sequence() {
const output1 = await a();
const output2 = await b();
const output3 = await c();
return `sequence is done: ${output1} ${output2} ${output3}`;
}
async function race() {
const promises = [a(), b(), c()];
const output1 = await Promise.race(promises);
return `race is done: ${output1}`;
}
sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
// race is done: a
// parallel is done: a b c
// sequence is done: a b c




// polyfill of bind


Function.prototype.myBind = function(...args) {
	let obj = this;
	let params = args.slice(1);
	return function(args2) {
		obj.apply(args[0], [...params, ...args2]);
	}
}


// alternate way of writing bind polyfill

Function.prototype.myBind2 = function(scope, args) {
	scope._this = this;
	return function() {
		return scope._this(...args);
	}
}


// polyfill of call

Function.prototype.myCall= function(scope, ...args) {
	scope._this = this;
	return scope._this(...args);
}


// polyfill of apply

Function.prototype.myCall = function(scope, args) {
	scope._this = this;
	return scope._this(...args);
}


// debounce basic implementation
function debounce(fn, delay) {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
  
};


// throttling
function myThrottle(callBackFn, delay) {
    let doCallFn = true;
    return function() {
        if(doCallFn) {
            callBackFn();
            doCallFn = false;
        }
        setTimeout(function() {
            doCallFn = true;
        }, delay);
    }    
}




function expensiveFn() {
    console.log('I am expensive fn');
}

const betterFn = myThrottle(expensiveFn, 1000);
betterFn();
betterFn();
setTimeout(function() {
    betterFn();
}, 2000);


// throttling with handled edge cases

function myBetterThrottle(callBackFn, delay) {
    let doCallFn = true;
    return function() {
        let context = this;
        let args = arguments;
        if(doCallFn) {
            callBackFn.apply(context, args);
            delay = false;
        }
        
        setTimeout(function() {
            doCallFn = true;
        }, delay);
    }
}

const betterFn = myBetterThrottle((name) => expensiveFn(name), 1000);
betterFn('Adarsh');

// debouncing
function myDebouncingFn(callBackFn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callBackFn.apply(context, args);
        }, delay);
    }    
}


function myExpensiveFn() {
    console.log('I am expensive');
}

const executor = myDebouncingFn(myExpensiveFn, 1000);
executor();
executor();

//flatten the object of n level, recursive solution
let myObj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};


const flatten = (obj) => {
    let result = {};
    if(Object.keys(obj).length === 0
    || !obj) {
        return;    
    }

    for(const x in obj) {
        if(typeof obj[x] === 'object') {
            const temp = flatten(obj[x]);
            for(const y in temp) {
                result[x + '_' + y] = temp[y];
            }
        } else {
            result[x] = obj[x];
        }
    }
    
    return result;
}

console.log(flatten(myObj));

// shallow merge objects in js solution 1
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    }
}

// shallow merge objects in js solution 2
function mergeObject(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}


// custom function to merge objects

function merge(...args) {
    let merged =  {};
    
    let mergeObject = (obj) => {
        for(let x in obj) {
            merged[x] = obj[x];
        }
    }
    
    for(let item of args) {
        mergeObject(item);
    }
    
    return merged;
}




let obj1 = {
  name: 'prashant',
  age: 23,
}

let obj2 = {
  qualification: 'BSC CS',
  loves: 'Javascript'
}

console.log(merge(obj1, obj2));