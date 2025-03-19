def lucky_sum(a, b, c):
  sum = a + b + c
  if(a == 13):
    sum = 0
  elif(b == 13):
    sum = sum - b - c
  elif(c == 13):
    sum -= c
  return sum