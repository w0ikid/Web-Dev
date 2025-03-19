def no_teen_sum(a, b, c):
  a = fix_teen(a)
  b = fix_teen(b)
  c = fix_teen(c)
  sum = a + b + c
  return sum
  
  
  
  
def fix_teen(n):
  if(n >= 13 and n <= 19 and n != 15 and n != 16):
    return 0
  return  n
