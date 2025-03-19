a = int(input())
i = 0
while(i < a):
    if(2**i >= a):
        print(i) 
        break
    i += 1
