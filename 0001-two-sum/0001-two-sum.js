/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map={}
    for(let i=0; i<nums.length; i++){
        let value=nums[i]
        let required_number=target-value
        if(map[required_number] !== undefined){
            return [i,map[required_number]]
        }
        else{
            map[value]=i
        }
    }
};