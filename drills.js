//~~URLify a string~~//

function URLify(str) {
  let newStr = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    };
  };
  return newStr;
};

console.log(URLify('www.thinkful.com /tauh ida parv een'));

//~~Filtering an array~~//

function filterArray(arr) {
  let filteredArr = [];
  for (i=0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filteredArr.push(arr[i]);
    };
  };
  return filteredArr;
};
console.log(filterArray([1,4,6,8,3,10]));

//