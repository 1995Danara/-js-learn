function readNumber() {
    let num;
  
    do {
      num = prompt("Введите числовое значение", " ");
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);