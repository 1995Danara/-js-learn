let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

  //Ответ: rabbit. Потому что this – это объект, который стоит перед точкой //