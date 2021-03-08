/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 
 */

 // Map  
 let nums = [2,7,11,6,15];
 let target = 13;
 function sumNum(nums,target){
    const map = new Map();
     for(let i = 0; i < nums.length;i++){
         let c = target - nums[i];
         if(map.has(c)){
            return [map.get(c),i]
         }
         map.set(nums[i],i)
     }
 }

 let cccc = sumNum(nums,target)


 console.log(cccc)