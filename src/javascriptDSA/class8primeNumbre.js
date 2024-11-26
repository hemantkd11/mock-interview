const findPrimeNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] <= 1) {
      isPrime = false;
    } else if (arr[i] == 2) {
      isPrime = true;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        console.log("jjjjjjj", j);
        if (arr[i] % j === 0) {
          console.log("j", j, arr[i]);
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log("It's a prime number:", arr[i]);
    } else {
      console.log("Not a prime number:", arr[i]);
    }
  }
};
findPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// const findPrimeNumber = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//       let isPrime = true;

//       if (arr[i] <= 1) {
//         console.log(arr[i])
//         isPrime = false;

//       } else {
//         for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//           if (arr[i] % j === 0) {
//             console.log( Math.sqrt(arr[i]) , arr[i])
//             isPrime = false;
//             break;
//           }
//         }
//       }

//       if (isPrime) {
//         // console.log("It's a prime number:", arr[i]);
//       } else {
//         // console.log("Not a prime number:", arr[i]);
//       }
//     }
//   };

//   findPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
