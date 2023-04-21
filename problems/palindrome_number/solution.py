class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False
        if x==0:
            return True
        i=len(str(x))-1
        strx=str(x)
        rev=''
        j=0
        while(i>=0):
            if(strx[i]!=strx[j]):
                return False
            rev+=strx[i]
            i-=1
            j+=1
        print(rev,strx,"(())")
        if(rev==strx):
            return True