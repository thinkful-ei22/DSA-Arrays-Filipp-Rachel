/* global i*/

//~~URLify a string~~//

// function URLify(str) {
//   let newStr = '';
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       newStr += '%20';
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(URLify('www.thinkful.com /tauh ida parv een'));


//~~Filtering an array~~//

// function filterArray(arr) {
//   let filteredArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// console.log(filterArray([1,4,6,8,3,10]));


//Max sum in the array

// function continuousSeq(array) {
//   let currentMax = 0;
//   let maxSoFar = 0;
//   for (i = 0; i < array.length; i++) {
//     currentMax += array[i];
//     if (currentMax > maxSoFar) {
//       maxSoFar = currentMax;
//     }
//   }
//   return maxSoFar;
// }

// console.log(continuousSeq([4,6,-3,5,-2,1]));

//Merge Arrays

// function arrayMerger(array1, array2) {
//   let filteredArray = [];
//   let index1 = 0;
//   let index2 = 0;

//   for (let i = 0; i < array1.length + array2.length; i++) {
//     if (array1[index1] > array2[index2]) {
//       filteredArray.push(array2[index2]);
//       index2++;
//     } else if (array1[index1] < array2[index2]) {
//       filteredArray.push(array1[index1]);
//       index1++;
//     } else {
//       filteredArray.push(array1[index1]);
//       index1++;
//     }
//   }
//   return filteredArray;

// }

// console.log(arrayMerger([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
