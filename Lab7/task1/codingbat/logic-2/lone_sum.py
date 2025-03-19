def lone_sum(a, b, c):
  sum = a + b + c
  if(a == b):
    sum = c
  elif(a == c):
    sum = b
  elif(b == c):
    sum = a
  if(a == b and b == c):
    sum = 0
  return sum
