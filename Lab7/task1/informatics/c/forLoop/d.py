x = int(input())
d = int(input())
cnt = 0
for i in range(x):
    if(i % 10 == d):
        cnt += 1

print(cnt)