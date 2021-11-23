type Time = {
    Hours: number;
    Minutes: number;
    Seconds: number;
    Milliseconds: number;
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

    static timeToString = (tm: Time): string => {
        let seconds = (`0${tm.Seconds}`).slice(-2);
        let minutes = (`0${tm.Minutes}`).slice(-2);
        let hours = (`0${tm.Hours}`).slice(-2);
        let milliseconds = (`00${tm.Milliseconds}`).slice(-3);

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    static msToString = (ms: number): string => {
        let tm = TimeUtilities.msToTime(ms);
        return TimeUtilities.timeToString(tm);
    }
}
