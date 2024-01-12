function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  work(); // что будет показано?
  
  // "Pete" Функция получает name из места его происхождения через ссылку на внешнее лексическое окружение //