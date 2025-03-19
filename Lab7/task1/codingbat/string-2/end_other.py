def end_other(a, b):
  k, z  = "", ""
  a = a.lower()
  b = b.lower()
  if(len(a) > len(b)):
    k = a
    z = b
  else:
    k = b
    z = a
  if(k[len(k)-len(z):len(k)] == z):
    return True
  return False
