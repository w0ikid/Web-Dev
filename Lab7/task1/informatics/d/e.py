n, cnt = int(input()), 0
target = False
a = list(map(int, input().split()))
for i in range(n):
    if(i == 0): continue
    if(a[i] == a[i-1]):
        target = True
        
if(target): print("YES")
else:print("NO")