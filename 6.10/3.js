function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему? //

  // undefined, т.к pезультатом работы bind является другой объект. У него нет свойства test //


