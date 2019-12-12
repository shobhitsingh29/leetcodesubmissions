/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  
var str='';

let temp=num;
        
        
        if(temp>=1000){
            
          var no_of_M=Math.floor(temp/1000);
            while(no_of_M>0){
                 str+='M';
                no_of_M--;
            }
            temp=temp%1000;
        }

    if(temp>=500){
            if(temp>=900){
                
                str+='CM';
                                              temp-=900;

            }else{
               var no_of_D=Math.floor(temp/500);
            while(no_of_D>0){
                 str+='D';
                no_of_D--;
            } 
            }
          
            temp=temp%500;
        }
    if(temp>=100){
        if(temp>=400){
                
                str+='CD';
                              temp-=400;

            }
            else{
          var no_of_C=Math.floor(temp/100);
            while(no_of_C>0){
                 str+='C';
                no_of_C--;
                
            }
            }
            temp=temp%100;
        }
    if(temp>=50){
         if(temp>=90){
                
                str+='XC';
             temp-=90;
            }
            else{
          var no_of_L=Math.floor(temp/50);
            while(no_of_L>0){
                 str+='L';
                no_of_L--;
                
            }
            }
            temp=temp%50;
        }
    if(temp>=10){
             if(temp>=40){
                
                str+='XL';
                  temp-=40;
            }else{
          var no_of_X=Math.floor(temp/10);
            while(no_of_X>0){
                 str+='X';
                no_of_X--;
                
            }
            }
            temp=temp%10;
        }
    if(temp>=5){
        
             if(temp==9){
                
                str+='IX';
                temp=0;
            }
          var no_of_V=Math.floor(temp/5);
            while(no_of_V>0){
                 str+='V';
                no_of_V--;
                
            }
            temp=temp%5;
        }
    
     if(temp>=1){
            if(temp==4){
                
                str+='IV';
                temp=0;
            }
          var no_of_I=Math.floor(temp/1);
            while(no_of_I>0){
                 str+='I';
                no_of_I--;
                
            }
            temp=temp%1;
        }
    
return str;

};