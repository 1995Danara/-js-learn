function sumSalaries(salaries) {
    let sum = 0;
  
    for (let value of Object.values(salaries)) {
      if (!isNaN(value)) {
        sum += value;
      }
    }
  
    return sum;
  }