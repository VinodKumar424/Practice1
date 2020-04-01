
//Prime Number checking

function CheckPrime(){
    var n, i, flag = true; 
              
    n = document.myform.n.value; 
    n = parseInt(n) 
    for (i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
          
    if (flag == true) 
        console.log(n + " is prime"); 
    else
        console.log(n + " is not prime"); 
} 

// even and odd numbers sum......
var abc=[1,2,3,4,5]
var even = 0;
var odd = 0;
var evenSum=0;
var oddSum=0;

for (i = 0; i < abc.length; i++) {
		if (i % 2 === 0) {
            evenSum=evenSum+abc[i]
         even ++;
    } else {
        oddSum=oddSum+abc[i]
       odd ++;
      
    }
    }
    console.log(evenSum);
     console.log(oddSum);
     console.log(evenSum+oddSum);

     //reverse of the sentence

     Array = ['r','e','v','e','r','e','s','e']
     console.log(Array);                                //reverse of array 
     Array.reverse();
     console.log(Array);


     //pattren methodd
     var num = 5;
     var m, n;
     for (m = num; m >= 0; m--) {
     for (n = 1; n <= m; n++)
     document.write(""+n+" ");
     document.write('<br/>');
     }