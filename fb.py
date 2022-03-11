






#print number 1-100 using using range
#replace multiples of 15 to not mes wiht logic

from tkinter import N


for n in list(range(1,21)):
    if n % 5 == 0 and n % 3 == 0:
        print('FizzBuzz')
    elif n % 5 == 0:
        print('Buzz')
    elif n % 3 == 0:
        print('Fizz')
    else:
        print(n)