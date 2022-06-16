const weekdays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const schedule = new Date()
schedule.setDate(schedule.getDate() + 10)
schedule.setSeconds(0)
schedule.setMinutes(30)
schedule.setHours(11)

function msToTime(duration) {
    seconds = Math.floor((duration / 1000) % 60)
    minutes = Math.floor((duration / (1000 * 60)) % 60)
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    days = Math.floor(duration / (1000*60*60*24))

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    days = (days < 10) ? "0" + days : days
    
    return (
        `<div>
            <h2>${days}</h2>
            <label>DAYS</label>
        </div>
        <div>
            <h2>${hours}</h2>
            <label>HOURS</label>
        </div>
        <div>
            <h2>${minutes}</h2>
            <label>MINS</label>
        </div>
        <div>
            <h2>${seconds}</h2>
            <label>SECS</label>
        </div>
        `
    )
}

const giveawayText = `Giveaway Ends On ${weekdays[schedule.getDay()]}, ${schedule.getDate()} ${months[schedule.getMonth()]} ${schedule.getFullYear()} ${schedule.getHours()}:${schedule.getMinutes()}am`

document.querySelector('h4').innerHTML = giveawayText

setInterval(() => {
    const now = new Date()
    document.querySelector('.timeBlocks').innerHTML = msToTime(schedule - now)
},1000)