function sortAceending(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(sortAceending([10,9,1000,12,-11,3]));

function sortDecending(arr){
    for(let k=arr.length-1; k>=0; k--){
        for(let l=k; l>=0; l--){
            if(arr[k]<arr[l]){
                temp=arr[k];
                arr[k]=arr[l];
                arr[l]=temp;
            }
        }
    }
    return arr;
}
console.log(sortDecending([10,9,1000,12,-13,33]))

//Acending order in an array

var person=['Ajay','Vijay','Suraj','Ramesh']
document.getElementById("demo").innerHTML=person;
function myFunction(){
    person.sort();
    document.getElementById("demo").innerHTML=person;
}

//palindrome
function palindrome(){
    var reminder,temp,final=0;
    var number=Number(document.getElementById("N").value);
    temp=number;
    while(number>0)
    {
        reminder=number%10;
        number=parseInt(number/10);
        final=final*10+reminder;
    }
    if(final == temp)
    {
        window.alert("the input value is palindrome");
    }
    else
    {
       window.alert("the input value is not palindrome");
    }
}

//removing the repeated letteers
  let wordsList = [
    'hheellloo',
    'hhooww',
    'aaaarrrreee',
    'yyyyyoooouuuuu',
  ];
  
  wordsList = wordsList.map(word => word.replace(/(.)\1+/g, '$1'));
  
  console.log(wordsList);


// vowels in a string

  function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Glory Auto Tech"));

//consonents in a string
function consonents_count(str2)
{
    var consonents_list='bcdfghjklmnpqrstvwxyz';
    var ccount =0;
    for( var y=0; y < str2.length ; y++)
    {
        if(consonents_list.indexOf(str2[y]) !== -1)
        {
            ccount +=1;
        }
    }
    return ccount;
}
console.log(consonents_count("glory auto tech"))

//Largest number of  the number of inputs
var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);

//count the number of digits in an integer

function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  
  console.log(digits_count(12112));
  
  console.log(digits_count(457));
  

//  frequency of charcters
  function getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  
  console.log(getFrequency('character'));


  //matrix Addition
  

  function addition(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);
        m = new Array(bNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; r++) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; c++) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; i++) {
          m[r][c] += a[r][i] + b[i][c];
        }
      }
    }
    return m;
  }
  
  function display(m) {
    for (var r = 0; r < m.length; r++) {
      document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
    }
  }
  
  var a = [[8, 3], [2, 4], [3, 6]],
      b = [[1, 2], [4, 6], [2, 5]];
  document.write('matrix a:<br />');
  display(a);
  document.write('matrix b:<br />');
  display(b);
  document.write('a + b =<br />');
  display(addition(a, b));
  

  //pattrens
  var i,j;
for(i=0;i<=6;i++)
{
for(j=0;j<=i;j++)
document.write(i+(j+1));
for(j=i-1;j>=1;j--)
document.write(i+j);
document.write("<br/>");
}
