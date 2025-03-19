a, b, c, d = int(input()), int(input()), int(input()), int(input())

for i in range(a, b):
    if(i % d == c):
        print(i, end=' ')
