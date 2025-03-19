def sum67(nums):
 if len(nums) == 0:
    return 0
 sum = 0
 sum671 = 0
 for num in nums:
   if num == 6 or not sum671 == 0:
     sum671 += num
   if num == 7  and not sum671 == 0:
     sum-=sum671
     sum671=0
    
   sum +=num
    
 return sum
