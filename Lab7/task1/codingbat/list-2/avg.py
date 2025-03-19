def centered_average(nums):
  items = len(nums)
  high = max(nums)
  low = min(nums)
  total = sum(nums)
  aveg = (total -high-low) / (items-2)
  return aveg
      
