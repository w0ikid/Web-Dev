n, cnt = int(input()), 0
a = list(map(int, input().split()))
for i in range(n):
    if(i == 0): continue
    if(a[i] > a[i-1]):
        cnt += 1

print(cnt)