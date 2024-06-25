
let nums = [10,20,30,40,50];

function firstlast(nums) {

    var x = [];

    x.push(nums[0],nums[nums.length - 1])

    return x
}

console.log(firstlast(nums))