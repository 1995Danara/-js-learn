let user = {
    name: "John",
    go: function() { alert(this.name) }
  }; // пропущена точка с запятой
  
  (user.go)()