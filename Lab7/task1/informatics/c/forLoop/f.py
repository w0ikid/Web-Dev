s = input()
for i in s[::-1]:
    if(i == '0' and i == s[-1]):
        continue
    else: print(i, end='')
