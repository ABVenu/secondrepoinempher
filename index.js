// i start codinh here;

let arr = [1, 2, 34, 56, 7, 8, 90];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    count++;
  }
}

console.log(`count of odd numbers is ${count}`);

let str = "racecar";

function checkPalindrome(str) {
  let bag = "";

  for (let i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }

  if (bag == str) {
    return true;
  } else {
    return false;
  }
}
