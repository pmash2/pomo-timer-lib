import Time from './Types/time'

const TimeUtilities = {

    msToTime: (ms: number): Time => {
        let milliseconds = ms % 1000
        let seconds = Math.trunc(ms / 1000)
        const hours = Math.trunc(seconds / 3600)
        seconds = seconds % 3600
        const minutes = Math.trunc(seconds / 60)
        seconds = seconds % 60
        
        return new Time(hours, minutes, seconds, milliseconds)
    },

    TimeToMs: (tm: Time): number => {
        let totalMs = 0
        totalMs += tm.Hours * 3.6e+6
        totalMs += tm.Minutes * 60000
        totalMs += tm.Seconds * 1000
        totalMs += tm.Milliseconds

        return totalMs
    },

    diff: (greaterTime: Time, lesserTime: Time): Time => {
        let gMs = TimeUtilities.TimeToMs(greaterTime)
        let lMs = TimeUtilities.TimeToMs(lesserTime)
        let diffMs = gMs - lMs

        return TimeUtilities.msToTime(diffMs)
    }
}

export default TimeUtilities