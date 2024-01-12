function User(name)
  this.name = name
  
  alert(name)

user = new User ("John");
user2 = new user.constructor ("Adam");

alert( user.name); // Adam



function User(name) {
    this.name = name;
  }
  User.prototype = {
    age: 30;
  }
  
  let user = new User("John");
  let user2 = new user.constructor("Adam");
  
  alert( user2.name ); // undefined