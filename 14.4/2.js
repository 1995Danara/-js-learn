let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined


//операции присваивания, или сравнения через логические операторы, превращает это значение в обычное, которое не несёт информации, позволяющей установить this.