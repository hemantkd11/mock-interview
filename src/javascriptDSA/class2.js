//string anagram
// 'hello' =>
// hhhhl   hhhhh
/*
what is  string anagram ===>
 1st -  check the lemgth for both string if not same then false
 2nd -  if the length is same then  just ccount the letter in both string one by one

*/
// const str =  "hemant"
// console.log(str.length)

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let count = {};

  for (let letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
    console.log(count[letter]);
    // console.log(count);
  }
  for (let item of str2) {
    if (!count[item]) {
      console.log("Not Ana");
      return false;
    }
    count[item] -= 1;
  }
  return true
}
isAnagram("hhhhl", "hhhhh");


//1 st from 1