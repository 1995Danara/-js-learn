promise.then(f1).catch(f2);


promise.then(f1, f2);

// Нет, не эквивалентны. Во втором коде нет блока catch, соответственно ошибка останется не обработанной