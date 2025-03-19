a, cnt = int(input()), 0
for i in range(1, a+1):
    if(a % i == 0):
        cnt += 1
print(cnt)