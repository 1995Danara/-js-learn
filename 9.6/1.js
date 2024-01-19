function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true


// instanceof проверяет прототип, не учитывая функцию