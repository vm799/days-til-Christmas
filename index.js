const daysLeftBeforeChristmas = document.getElementById("result")
const meter = document.getElementById("meter")
const submitBtn = document.getElementById("submit-btn").addEventListener("click", daysLeft)

function daysLeft(){   
    event.preventDefault()
    const inputDate = document.getElementById("date").valueAsDate 
    console.log(inputDate)
    const date = new Date()
    const christmas = new Date(date.getFullYear(), 11 , 25)
    const month = date.getMonth()
    const day = date.getDate()
    
    const timePeriodInDay = 1000*24*60*60
    
    if (month === 11 && day > 25){
       
        christmas.setFullYear(date.getFullYear()+1)
       const timeBeforeChristmas = christmas.getTime()
       const timeToday = inputDate.getTime()
       console.log(timeToday)
       const timeDateInput = date.getTime()
       
       const timeLeft = Math.round((timeBeforeChristmas - timeToday)/ timePeriodInDay)
        console.log(`Are you ready for the answer? There are ${timeLeft} days til Christmas!!`)
        meter.value = timeLeft
        daysLeftBeforeChristmas.textContent = timeLeft
    } else {
       const timeBeforeChristmas = christmas.getTime()
       const timeToday = date.getTime()
       const timeLeft = Math.round((timeBeforeChristmas - timeToday)/ timePeriodInDay)
        console.log(`Are you ready for the answer? There are ${timeLeft} days til Christmas!!`)

        daysLeftBeforeChristmas.textContent = '${timeLeft}'
    }
}

