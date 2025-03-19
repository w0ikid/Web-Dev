def cat_dog(str):
  cat, dog = 0, 0
  for i in range(len(str)):
    if(str[i:i+3] == "cat"):
      cat+=1
    if(str[i:i+3] == "dog"):
      dog+=1
  if(cat == dog):
    return True
  return False
