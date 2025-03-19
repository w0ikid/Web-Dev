n = int(input())
a = list(map(int, input().split()))
for i in range(n):
    print(a[n-1], end=' ')
    n -= 1