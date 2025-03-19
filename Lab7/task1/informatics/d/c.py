n, cnt = int(input()), 0
a = list(map(int, input().split()))
for i in range(n):
    if(a[i] > 0):
        cnt += 1

print(cnt)