function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}