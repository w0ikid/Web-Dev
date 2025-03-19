


def minf(a, b, c, d):
    print(min(min(a, b), min(c, d)))

a = list(map(int, input().split()))
minf(a[0],a[1],a[2],a[3])