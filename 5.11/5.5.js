function getSecondsToTomorrow() {
    let now = new Date()
   
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let diff = tomorrow - now
    
    return Math.round(diff / 1000)
   }