s, sum = input(), 0
z = 1
for i in s[::-1]:
    sum += int(i)*z
    z *= 2
print(sum)
