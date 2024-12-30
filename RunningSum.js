// 
const arr= [1,2,3,4,5,6]
let sum = 0;
arr.forEach((e,i) => {
    sum = e + sum;
    arr[i] = sum 
})

console.log(arr)