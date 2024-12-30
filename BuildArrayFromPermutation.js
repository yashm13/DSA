// [0,2,1,5,3,4]
// [arr[arr[0]],arr[arr[2]],arr[arr[1]],1,5,3,4]
// [arr[0],arr[1],arr[2],1,5,3,4]

const nums = [0,2,1,5,3,4]
const arr =[]
nums.forEach((e,i) => {
    arr[i] = nums[nums[i]];
})
console.log(arr)

// traverse through whold arr O(n) minimum O(1);
// 