n, cnt = int(input()), 0
a = list(map(int, input().split()))
for i in range(n):
    if(i < n-1 and i != 0 and a[i] > a[i-1] and a[i] > a[i+1]):
        cnt += 1

print(cnt)