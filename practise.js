// // // console.log("sikandar");
// // // reverse a string
// function reverseString(str){
// return str.split('').reverse('').join('')
// }
// console.log(reverseString("lifted"));
// console.log("sikandar");

// function isPalindrome(str) {
// let newValue = str.split('').reverse('').join('');
//   return newValue === str;
// }
// console.log(isPalindrome("civic"));

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
if (reverseString("take") === 'take') {
    console.log('It is a palindrom ')
} else {
    console.log('It is not a palindrom')
}
//  console.log(reverseString("take"));

// // // palindrome string

// // function isPalindrome(str){
// // let reversed = str.split('').reverse('').join('')
// // return str === reversed
// // }
// // console.log(isPalindrome("hello"));
// // const numbers = [1, 2, 3, 4, 20];
// // const maxNumber = Math.max(...numbers);
// // console.log(maxNumber); 


// // var a = 55;
// // // var a =6;


// // abc()
// // //  console.log(b);

// // function abc(){
// // var b = 5;
// // b =10;

// // console.log(a);
// // }






// // // function isPalindrome(str) {
// // //     let left = 0, right = str.length - 1;

// // //     while (left < right) {
// // //       if (str[left] !== str[right]) return false;
// // //       left++;
// // //       right--;
// // //     }
// // //     return true;
// // //   }
// // // console.log(isPalindrome("civic"));

// // //convert string into array
// // // var abc = "Hello";
// // // var arr = abc.split('');
// // // console.log(arr);

// // // var abc = "Hello";
// // // var arr = [...abc]
// // // console.log(arr);

// // // function stringToArray(str) {
// // //     let arr = [];
// // //     for (let i = 0; i < str.length; i++) {
// // //       arr[i] = str[i]; // Assign each character to the array
// // //     }
// // //     return arr;
// // //   }

// // //   console.log(stringToArray("resume"));


// // // function lengthOfString(str){
// // // let count = 0;
// // // for(let char of str){
// // //     count++
// // // }
// // // return count

// // // }
// // //    console.log(lengthOfString("resume"));

// // //    var str = "ali";
// // //    var abc = str.length;
// // //    console.log(abc);

// // //    let checkVowel=[]
// // //    function countVowels(str) {
// // //     let count = 0;
// // //     let vowels = ['a', 'e', 'i', 'o', 'u']; // Vowel list

// // //     for (let i = 0; i< str.length ; i++) {
// // //       if (vowels.includes(str[i].toLowerCase())) {
// // //         count++;
// // //         checkVowel[count-1]=str[i]
// // //       }
// // //     }
// // //     return count;
// // //   }
// // //   console.log(countVowels("hello world"));
// // //   console.log(checkVowel)


// // //   function duplicateArray(arr){
// // // return [... new Set(arr)]
// // //   }
// // //   console.log(duplicateArray( [2,3,3,4,5,5,7]))


// // //   var arr = ['This', ' is ', ' my ', ' cat'];
// // //   var str = arr.join();
// // //   console.log(str);


// // // let arr = ['This', ' is ', ' my ', ' animal']
// // // // let reverseArr = []
// // // for (let i = arr.length - 1; i >= 0; i--) {
// // //     console.log(arr.push());
// // // }



// // function arrayCountries(countries) {
// //  //   let names = countries.join(' ')
// //    // console.log(names);
// // // let reverse = []
// // // let count = 0;
// // // for(let char of countries){
// // //     count++
// // //         // reverse += countries[i]
// // //     // console.log(reverse.push(countries[i]));
// // // }
// // // return count;
// //     // switch (opt) {
// //     //     case '+':
// //     //         result = num1 + num2
// //     //         console.log(result)
// //     //         break;
// //     //     case '-':
// //     //         result1 = num1 - num2
// //     //         console.log(result1)
// //     //         break;
// //     //     case '*':
// //     //         result2 = num1 * num2
// //     //         console.log(result2)
// //     //         break;
// //     //     case '/':
// //     //         result3 = num1 / num2
// //     //         console.log(result3)
// //     //         break;
// //     //     case '%':
// //     //         result4 = num1 % num2
// //     //         console.log(result4)
// //     //         break;

// //     //     default:
// //     //         console.log("not divisible")
// //     //         break;
// //     // }

// //     // if(num > 0){
// //     //     debugger;
// //     //     // result = num1 + num2
// //     // console.log("number is positive")
// //     // }
// //     // if(num < 0){
// //     //     // result1 = num1 - num2
// //     //     console.log("number is negative")
// //     // }
// //     // if(num == 0){
// //     //     // result1 = num1 - num2
// //     //     console.log("number is zero")
// //     // }
// //     // if(opt === '*'){
// //     //     result2 = num1 * num2
// //     // console.log(result2)
// //     // }
// //     // else{
// //     //     console.log("not divisible")
// //     // }
// // }
// // // console.log(arrayCountries(['pakistan','india','USA']))


// // // var greeting; 
// // //  var hour = 19; 
// // //  if (hour < 18) { 
// // //  greeting = "Good day"; 
// // //  console.log(greeting)
// // //  }
// // //  else {

// // //      greeting = "Good evening"; 
// // //      console.log(greeting)
// // //  }


// //  function variableType(value){
// //     //let vowels = "aeiouAEIOU";
// //    // return vowels.includes(value)
// // //    let min = Math.min(...value)
// // //    let max = Math.max(...value)
// // //    return {min,max}
// // // let type = typeof value
// // // if(type === "number"){
// // //     console.log("variable is number");
// // // }
// // // if(type === "string"){
// // //     console.log("variable is string");
// // // }
// // // if(type === "boolean"){
// // //     console.log("value is boolean");
// // // }


// //  }
// // //  console.log(variableType([1,5,3,6,7]))
 
// // //console.log(10 !== 8);

// // // let matrix = [
// // //     [0, 1, 2, 3], 
// // //     [1, 0, 1, 2], 
// // //     [2, 1, 0, 1]
// // // ];
// // // for (let i = 0; i < matrix.length; i++) {
// // //     for (let j = 0; j < matrix[i].length; j++) {
// // //         console.log(matrix[i][j]);
// // //     }
// // // }

// // // let cube = [
// // //     [
// // //         [1, 2], [3, 4]
// // //     ],
// // //     [
// // //         [5, 6], [7, 8]
// // //     ]
// // // ];

// // // console.log(cube[0][1][1]); // 4
// // // console.log(cube[1][0][1]); // 6


// // // let sum = 0;
// // // for (let i = 0; i < matrix.length; i++) {
// // //     for (let j = 0; j < matrix[i].length; j++) {
// // //         sum += matrix[i][j];
// // //     }
// // // }
// // // console.log("Sum of all elements:", sum);


// // let arr = [70, 25, 7, 65, 32];
// // let max = arr[0]; // Assume first element is max

// // for (let i = 1; i < arr.length; i++) {
// //   if (arr[i] > max) {
// //     max = arr[i]; // Update max if current value is greater
// //   }
// // }

// // console.log("Maximum number is:", max);

// // // let arr = [5, 2, 9, 1, 3];

// // // // Outer loop – number of passes
// // // for (let i = 0; i < arr.length; i++) {
// // //   // Inner loop – compare adjacent elements
// // //   for (let j = 0; j < arr.length - 1 - i; j++) {
// // //     if (arr[j] > arr[j + 1]) {
// // //       // Swap if elements are in the wrong order
// // //       let temp = arr[j];
// // //       arr[j] = arr[j + 1];
// // //       arr[j + 1] = temp;
// // //     }
// // //   }
// // // }

// // // console.log("Sorted array:", arr);


// // let num = [2,3,3,5]


// // // const jsonStr = '{"name":"Ali","age":25}';
// // const jsonStrParse = {name:"Ali",age:25};

// // // const obj = JSON.parse(jsonStr);
// // const objStringify = JSON.stringify(jsonStrParse);

// // // console.log(obj.name); // "Ali"
// // console.log(objStringify); // "Ali"



// // function reverseString(str){
// //   let strnew = ''
// //   for(let i = str.length-1; i>=0; i--){
// // strnew+= str[i]
// //   }
// //   return strnew;
// // }
// //   if(reverseString("honda") === "honda"){
// //     console.log("palindrome")
// //   }
// //   else{
// //     console.log("Not Palindrome");
// //   }


// // // console.log(reverseString("Sikandar"))


// // let highestNumber = [2,4,5,3,10]
// // let result = Math.max(...highestNumber);
// // console.log(result);

// // function getHighestNumber(arr1,arr1){
// // let max = arr1[0];

// // for(let i = 1; i<arr1.length; i++){
// // if(arr1[i] > max){
// // max = arr1[i]
// // }
// // }
// // return max;

// // }
// // console.log('normal function',getHighestNumber([2,4,6,8],[2,3]))

// // let numbers1 = [2,4,6,7]
// // let cal = numbers1.every(num=> num % 2 === 0)
// // console.log(cal);


// // const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// // const cityList = cities.map((city,index)=>{
// // return `City ${index + 1}: ${city}`
// // })
// // console.log(cityList);

// // // const nameList = setInterval(()=>{
// // //   console.log("Hello");
// // // },3000)
 

// // // setTimeout(()=>{
// // // clearInterval(nameList)
// // // },5000)


let fruits = ["apple","mango","banana","grapes"]
let resultNew = [...fruits]
console.log(resultNew);




// function reverseString(str){
// let newStr = '';

// for(let i= str.length-1; i>=0; i--){
//   newStr+= str[i];
// }
// return newStr;
// }

// if(reverseString("Honda")=== "Honda"){
//   console.log("Palindrome");
// }
// else{
//   console.log("not Palindrome");
// }


// console.log(reverseString("Honda"))



 var highestNumber = [10,30,100,5,20]
function LargestNumber(arr){
let highestNumberNew = arr[0]
for(i=1; i<=arr.length;i++){
  if(arr[i] > highestNumberNew){
highestNumberNew = arr[i]
  }
}
return highestNumberNew;
}
console.log(LargestNumber(highestNumber))



//  var result = Math.min(...highestNumber);
//  console.log(result);


// var newName = "yasir";
// var reverseName = newName.substring(3);
// // var reverseName = newName.split("").reverse().join("");
// console.log(reverseName);


// function longestUniqueSubstring(str) {
//   let maxLen = 0;
//   let start = 0;
//   let seen = {};
//   let maxSubstr = "";

//   for (let end = 0; end < str.length; end++) {
//     const char = str[end];

//     if (seen[char] >= start) {
//       start = seen[char] + 1;
//     }

//     seen[char] = end;

//     if (end - start + 1 > maxLen) {
//       maxLen = end - start + 1;
//       maxSubstr = str.substring(start, end + 1);
//     }
//   }

//   return { maxSubstr, maxLen };
// }

// // ✅ Call the function AFTER it’s defined
// const input = "abcabcbb";
// const result = longestUniqueSubstring(input);

// console.log("Substring:", result.maxSubstr); // "abc"
// console.log("Length:", result.maxLen);       // 3




// function countUniqueVowels(str) {
//   const vowels = "aeiou";
//   let found = new Set();

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       found.add(char); // Set automatically avoids duplicates
//     }
//   }

//   return found.size; // Number of unique vowels
// }

// console.log(countUniqueVowels("JavaScript is awesome")); // Output: 4 (a, e, i, o)



function reverseStringNew(str){
let newStr = '';

for(i=0; i<str.length; i++){
  newStr = str.charAt(i) + newStr
}

if(newStr === str){
console.log("palindrome");
}
else{
console.log("Not palindrome");
}

}
 console.log(reverseStringNew("hello"));



// function isPalindrome(str) {
// let newValue = str.split('').reverse('').join('');
//   return newValue === str;
// }


// console.log(isPalindrome("hello"));  


// var str = "Hello";
// var newResult = str.split('');
// console.log(newResult);

// var arr = ["PK","Dollar","Dirham"];
// var newStr = arr.toString('');
// console.log(newStr);

// function findVowels(vow){
// let vo = "aeiouAEIOU";
// let re = new Set();

// for(let char of vow){
// if(vo.includes(char)){
// re.add(char.toLowerCase())
// }
// }

// return [...re];
// }

// console.log(findVowels("javaScript"));


// function countString(arr){
// let count = 0;

// for(let item of arr){
// count ++;
// }
// return count;

// }
// console.log(countString(["1","2","5","10","20"]));



var countries = ["Pakistan","India","England","China"];
// var reverseCountries = countries.reverse('');
// console.log(reverseCountries);




function reverseArray(arr){
  let left = 0;
  let right = arr.length -1;
  if(left < right){
let temp = arr[left];
arr[left] = arr[right];
arr[right] = temp;
  }
  return arr;
}


console.log(reverseArray(countries));


// const p1 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
// const p2 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

// // async function getAllUsersAndPosts() {
//   Promise.all([p1,p2])
// .then((response)=>{
//   // const result = response.json();
// console.log("response",response);
// console.log("response",response[0][0].name);

// })
// .catch((error)=>{
// console.log(error);
// })
// // }

// // async function posts() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
// //   method: "GET"
// //   })
// // const posts = response.json();
// // console.log(posts);
// // }

// // getAllUsersAndPosts();
// // posts();




function getVowels(str){
let vowels = "aeiouAEIOU";
let charSet = new Set();
for(let char of str){
if(vowels.includes(char)){
charSet.add(char.toLowerCase())
}
}

return [...charSet];
}


console.log(getVowels("javascript"))



for(i=1;i<=5;i++){
  let pattern = '';
  for(j=1;j<=i;j++){
     pattern += "*"
  }
console.log(pattern);
}


function thirdHighestNew(arr) {
  // Sort in descending order
  let sorted = arr.sort((a, b) => b - a);
  
  // Pick 3rd element
  return sorted[2];
}

// Test
let numbersNew = [10, 4, 3, 50, 33, 90];
console.log(thirdHighestNew(numbersNew));  // 33


function thirdHighest(arr) {
  // Simple manual sorting (Bubble Sort)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // After sorting ascending, pick 3rd from end
  return arr[arr.length - 3];
}

// Test
let abc = [10, 4, 3, 50, 23, 90];
console.log(thirdHighest(abc));  // 23


// console.log(a);
// let a = 10;

// let count = 0;

// useEffect(()=>{
// setCount(count +1);
// },[count])


function count(){
  let count = 0;
count ++;
}

const myCount = count();

console.log(myCount);



// let a =5;
// console.log(a);

// function foo(){
//   var a =5;
//   // console.log(a);
// }

let obj1 = {}
let obj2 = {}
console.log(obj1==obj2);