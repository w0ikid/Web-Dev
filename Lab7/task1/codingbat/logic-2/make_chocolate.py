def make_chocolate(small, big, goal):
    noOfBigs = big if (5 * big <= goal) else goal / 5
    return goal - (noOfBigs * 5) if small >= (goal - (noOfBigs * 5)) else -1
