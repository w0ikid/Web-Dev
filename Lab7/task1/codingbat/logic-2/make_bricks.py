def make_bricks(small, big, goal):
  if (small + (big*5) >= goal) and (goal % 5 <= small):
    return True
  
  return False
