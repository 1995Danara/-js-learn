class Rabbit extends Object {
    constructor(name) {
      super(); // вызваем конструктор родителя
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') ); 



  
