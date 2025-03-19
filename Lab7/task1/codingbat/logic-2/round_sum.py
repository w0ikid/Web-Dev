def round_sum(a, b, c):
  a = rounde(a)
  b = rounde(b)
  c = rounde(c)
  sum = a + b + c
  return sum
  
def rounde(n):
  k = 0
  if(n % 10 >= 5):
    k = n + (10 - (n % 10))
  else:
    k = n - (n%10)
  return  k
