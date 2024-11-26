
# """    dictionary    """

# # way 1
# def SumOfChar(set_pair):
#     ferq = {}
#     for i in set_pair:
#         ferq[i]=ferq.get(i,0)+1
#     return ferq
# return_ferq = SumOfChar("hemant")
# print(return_ferq)


# # way 2
# def Sum_Char(Given_Input):
#     ferq = {}
#     for i in Given_Input:
#         print("'11'",i)
#         if i in ferq:
#             print("1",i)
#             ferq[i] += 1
#         else:
#             print("13",i)
#             ferq[i] = 1
#     return ferq

# return_ferq_sum = Sum_Char("heemantt")
# print(return_ferq_sum)


# ////////////////////////////////////////////////


# def retunSum(Inp):
#     sum= 0
#     for  i in Inp:
#         print("i",i)
#         sum = Inp[i] + sum
#     return sum
# # Inp_v = {"x":25, "y":25, "z": 50}

# retunSumOfdis = retunSum({"x":25, "y":25, "z": 50})
# print(retunSumOfdis)



# a =  {1,2,3,4}
# b = {1,2,5,6,7}
# print(a.union(b))


# print(type(a))

# ///////////////////////////////////////////////////
def count(Sntnc):
    str1 = Sntnc.split(" ")
    # print(typesStr1))
    set1 = set()
    set1.update(str1)
    print(type(set1))
    print(set1)

A = "this is python code where be are counting there unque Value in this sentence"
count(A)
# print(rtr)



# ///////////////////////////////////////
def count(Sntnc):
    str1 = Sntnc.split(" ")
    set1 = {}
    print(type(set1))
    for i in str1:
        if i in set1:
            set1[i] += 1
        else:
            set1[i] = 1
    print(set1)
A = "this is python code where be are counting there unique Value in this sentence"
count(A)



# /////////////////////////////////////
def SumOfChar(Sntnc):
    str1 = Sntnc.split(" ")
    ferq = {}
    for i in str1:
        ferq[i]=ferq.get(i,0)+1
    return ferq
return_ferq = SumOfChar( "this is python code where be are counting there unique Value in this sentence")
print("Count of Unique words",return_ferq)


# //////////////////////////////////////


def findCommon(a,b):
    dics1 = {}
    for i in a,b:
        if(a.keys() == b.keys()):
            dics1[i] = a[i] + b[i]
            print(dics1)
            
        
discA = {"a":1,"b":3,"c":4,"d":5}
discB = {"a":1,"c":3,"d":4,"e":5}
findCommon(discA,discB)
    


    # ////////////////////////////
def findCommon2(a,b):
    dics1 = {}
    common = a.keys() & b.keys()
    for i in common:
        dics1[i] = a[i] + b[i]
        print("new  words",dics1)
            
        
discA = {"a":1,"b":3,"c":4,"d":5}
discB = {"a":1,"c":3,"d":4,"e":5}
findCommon2(discA,discB)

# def findCommon(a,b):
#     dics1 = {}
#     for i in a:
#         if(i in b):
#             dics1[i] = a[i] + b[i]
#             print(dics1)
            
        
# discA = {"a":1,"b":3,"c":4,"d":5}
# discB = {"a":1,"c":3,"d":4,"e":5}
# findCommon(discA,discB)

"abcba"


# def plendrom(str):
#      str1 = str[::-1]
#      if(str1 == str):
#          print("true")
#      else:
#          print("false")


# plendrom("abcbea")


# def swapvalue(a,b):
#     # temp = a
#     # a = b 
#     # b= temp
#     return b , a 
        
# a,b = swapvalue(2,3)
# print("a",a,"b",b)



# def SumOfmatrix(a,b):
#     newMatrix = []
#     for i in range(len(a)):
#         # newMatrix = newMatrix + [[0] * len(a[0])]  
#         newRow = []
#         # print(type(newMatrix))
#         for j in range(len(a[0])):            
#             newRow[i][j] = (a[i][j] + b[i][j])
#         newMatrix += newRow
#         print(newMatrix)
        
  
def SumOfmatrix(a,b):
    mat = []
    for i in range(len(a)):
        innerMat = []
        for j in range(len(a[0])):
            nee = a[i][j] + b[i][j]
            innerMat.append(nee)
        mat.append(innerMat)
        print(mat)


             
X = [[1,2,3],
    [4 ,5,6],
    [7 ,8,9]]
 
Y = [[9,8,7],
    [6,5,4],
    [3,2,1]]
SumOfmatrix(X,Y)


def remove_common_chars(str1, str2):
    common_chars = set(str1) & set(str2)
    print(common_chars)

    for char in common_chars:
        str1 = str1.replace(char, '')
        str2 = str2.replace(char, '')

    return str1, str2

# Example
string1 = "hemant"
string2 = "kumar"

result1, result2 = remove_common_chars(string1, string2)

print("String 1 after removing common characters:", result1)
print("String 2 after removing common characters:", result2)




def reverse(arr):
    newArr = arr[::-1]
    print(newArr)

reverse([2,3,1,4])


def sortList(lit):

    lit.sort()
    print(lit)


sortList([1,3,2,6,4,2])


def removeMax(lit):
    m =  max(lit)
    print(m)
    lit.remove(m)
    print(lit)

removeMax([1,3,2,6,4,2])



def checkInc(arr):
    for i in range(0, len(arr)): 
       
        for j in range(i) : 
            num = 0           
            if  arr[i] > arr[j+1] :
                num = arr[i]
                arr[i] = arr[j+1]
                arr[j+1] = num
                print("mm",arr)

    
checkInc([2,1,3,5,4,8,7])



def checkInc(arr):
    for i in range(len(arr) - 1):
        temp = 0
        if arr[i] > arr[i + 1]:
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp

        print(arr)

checkInc([2, 1, 3, 5, 4, 8, 7])
# print(result)

# def rightAngleTriange(n):
#     k = n -1
#     for i in  range(0,n):
#         print("* ",end="")
#         for j in range(0,k):
#            print(end=" ")
#         k = k -1
#         for j in range(0,i+1):
            
#            print("\r")

    
# rightAngleTriange(10)

def sumOfArr(arr,n):
    for i in range(len(arr)):
        # sum = 0
        for j in range(i+1,len(arr)):
            print(i)
            print(j)
            if arr[i] + arr[j] == n :    
                return arr[i],arr[j]


            
reslt =sumOfArr([2,1,4,5,3,7],10)
print(reslt)


# def sumOfArr(arr, n):
#     for i in range(len(arr)):
#         for j in range(i+1, len(arr)):
#             if arr[i] + arr[j] == n:
#                 return True
#     return False

# result = sumOfArr([2, 1, 4, 5, 3, 7], 10)
# print(result)

def demo(A):  
    for i in range(A):
        # print(i)   # i 0 
        for j in range(A-i-1): # !0-0-1 9 
            print(" ", end=" ")
        for j in range(i+1): #  1
            print("*",end=" ")
            
        print()
demo(10)



# def Ass(N):
#     for i in range(N+1):
#         print("*"*i)
# Ass(20)

# def Ass(N,T):
#     for i in range(10):    
#         result = Ass(20)
#         print(result)
# Ass(20,10)


def main(T,N):
    for _ in range(T):
        sum = 0
        while N > 0:
            A = N%10
            print("A",A)
            sum += A
            N = int(N/10)
            # print(N)
        print(sum)

main(2,109)

# def demo():
#     for i in range(-6,-10,-1):
#         print(i,end=" ")
# demo()

def demo(x):
    for i in range(0,4):
        if x%2:
            x  = x*2
            print(x)
        else:
            x = x +1
            print(x)

demo(2)

def demo():
    c=0
    for i in range(0, 11):
        print("i",i)
        if i%2:
            print("Is not prime",i)
            c=c+1
    print("c",c)
demo()


def demo():
    for i in range(1):
        for j in range(2):
            for k in range(1):
                print("a", end=" ")
            print(end="")
        print("c")
demo()

def demo():
        
    x = 1
    for i in range(x):
        x=x+1
        print(i, end= " ")

demo()



