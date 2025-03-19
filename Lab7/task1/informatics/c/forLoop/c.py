a, b = int(input()), int(input())
for i in range(a, b):
    for j in range(a, b):
        if(j*j == i):
            print(i)