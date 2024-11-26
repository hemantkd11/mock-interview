//[1,2,3,4,3,5,4,6,7,8] =>
//counnt largest sum of consecutive digits

//num = 4

//conditions
// num > arrar.length => error

const largestSumOfConsucutive = (arr, num) => {
  if (num > arr.length) {
    throw new Error("num is greater then the array");
  } else {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
      let tem = 0;
      let j = 0
      for (let j = 0 ; j < num; j++) {

        console.log("i"+i+"j",j)
        tem = tem + arr[i + j];
      }
      if (tem > max) {
        max = tem;
      }
    }
    return max
  }
};
try {
  const result = largestSumOfConsucutive([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 3);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
