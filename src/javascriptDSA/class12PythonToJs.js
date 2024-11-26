// function countToffee()
//  let count = 0
//  let  a = []
//  if(count < 10){
//     a = count
//     count++
//     return a
//  }

//  countToffee()




 function randomName(A){
    let RemainnameS = [...A]
    let RemainnameW = [...A]
    for(let i = A.length; i > 0  ;i--){
    let randomS = Math.floor(Math.random()*RemainnameS.length) 
    let random_NameS = RemainnameS.splice(randomS,1)[0]
    let randomW = Math.floor(Math.random()*RemainnameW.length) 
    let random_NameW = RemainnameW.splice(randomW,1)[0]
    if(random_NameS == random_NameW){
    //    let a =   RemainnameS.splice(0, 0, random_NameS)
       let  b = RemainnameW.splice(0, 0, random_NameW)
    //    console.log("undo  names",RemainnameS,RemainnameW)
    }
    console.log("santa for ",random_NameS," is ",random_NameW)}

 }
 randomName(["hemant","arpit","ronit","rashmi","piyush","montu","tisha","sanchi"])


//  santa for  montu  is  rashmi
//  santa for  ronit  is  montu
//  santa for  hemant  is  sanchi
//  santa for  rashmi  is  piyush
//  santa for  arpit  is  tisha
//  santa for  sanchi  is  hemant
//  santa for  tisha  is  ronit
//  santa for  piyush  is  arpit