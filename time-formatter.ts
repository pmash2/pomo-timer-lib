type Time = {
    Hours: number;
    Minutes: number;
    Seconds: number;
    Milliseconds: number;
}

const zeroPad = (numberToPad: number, totalCharLength: number): string => {
    return (`0${numberToPad}`).slice(-totalCharLength);
}

export class TimeUtilities {

    static msToTime = (ms: number): Time => {
        let milliseconds = ms % 1000;
        let seconds = Math.trunc(ms / 1000);
        const hours = Math.trunc(seconds / 3600);
        seconds = seconds % 3600;
        const minutes = Math.trunc(seconds / 60);
        seconds = seconds % 60;

        let tm = {
            Hours: hours,
            Minutes: minutes,
            Seconds: seconds,
            Milliseconds: milliseconds
        };
        
        return tm;
    }

    static TimeToMs = (tm: Time): number => {
        let totalMs = 0;
        totalMs += tm.Hours * 3.6e+6;
        totalMs += tm.Minutes * 60000;
        totalMs += tm.Seconds * 1000;
        totalMs += tm.Milliseconds;

        return totalMs;
    }

    static timeToString = (tm: Time): string => {
        let timeString = "";

        if (tm.Hours) {
            timeString = zeroPad(tm.Hours, 2) + ":";
        }
        if (tm.Minutes) {
            timeString += zeroPad(tm.Minutes, 2) + ":";
        }

        timeString += zeroPad(tm.Seconds, 2) + ".";
        timeString += zeroPad(tm.Milliseconds, 3);

        return timeString;
    }

    static msToString = (ms: number): string => {
        let tm = TimeUtilities.msToTime(ms);
        return TimeUtilities.timeToString(tm);
    }

    static diff = (greaterTime: Time, lesserTime: Time): Time => {
        let gMs = this.TimeToMs(greaterTime);
        let lMs = this.TimeToMs(lesserTime);
        let diffMs = gMs - lMs;

        return this.msToTime(diffMs);
    }

    static diffString = (greaterTime: Time, lesserTime: Time): string => {
        let tmDiff = this.diff(greaterTime, lesserTime);

        return this.timeToString(tmDiff);
    }
}

export { Time }
