a = int(input())

i = 0
while(2**i <= a):
    if(2**i == a):
        print("YES")
        break
    i += 1
else:
    print("NO")