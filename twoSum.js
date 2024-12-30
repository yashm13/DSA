const nums = [2,7,8,12,23,1,4,5,6,9,11]

var twoSum = function(nums, target) {
    let start = 0;
    let end =  1;
    while(start < nums.length - 2 ){
        if(nums[start]+ nums[end] === target){
            return [start,end]
        }

        if(end === nums.length -1 ){
            start++
            end = start + 1
        }else{
            end++
        }
        
       
    }
    return -1
};

