def swap_case(s):
    n = ''
    for i in s:
        if i.isupper():
            n += i.lower()
        else:
            n += i.upper()
    return n


s = input()
result = swap_case(s)
print(result)
