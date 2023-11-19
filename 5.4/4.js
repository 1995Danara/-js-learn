function sumInput() {
 
    let numbers = [];
   
    while (true) {
   
    let num = prompt("Введите число", ' ');
   
     if (num === "" || num === null )
     break;
       
       numbers.push(+num);
     }
   
     let sum = 0;
     for (let number of numbers) {
       sum += number;
     }
     return sum;
   }
   
   alert( sumInput() );