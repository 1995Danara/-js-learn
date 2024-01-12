let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
    let max = 0;
    let user = null;
  
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > max) {
        max = salary;
        user = name;
      }
    }
  
    return user;
  }
  
  let topEarner = topSalary(salaries);