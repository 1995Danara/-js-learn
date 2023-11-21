function aclean(arr) {
    let map = new Map()
    for (let word of arr) {
    let str = word.toLowerCase().split(" ").sort().join()
    map.set(str,word)
    }
    return Array.from(map.values());
    }
    
    
    
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    
    alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"