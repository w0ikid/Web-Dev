def max_end3(nums):
  k = 0
  if(nums[0] > nums[-1]):
    k = nums[0]
  else:
    k = nums[-1]
  arr = []
  arr.append(k)
  arr.append(k)
  arr.append(k)
  return (arr)
