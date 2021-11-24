import Stopwatch from "./stopwatch"
import { Time, TimeUtilities } from "./time-formatter"

export default class Timer {
    private Watch: Stopwatch;
    public Span: Time;

    get Remaining(): Time {
        let stopwatchTime = TimeUtilities.msToTime(this.Watch.Elapsed);
        return TimeUtilities.diff(this.Span, stopwatchTime);
    }

    constructor(timerLength: Time) {
        this.Watch = new Stopwatch();
        this.Span = timerLength;
    }

    start() {
        console.log("Starting timer...");
        this.Watch.start();
    }

    stop() {
        console.log("Stopping timer...");
        this.Watch.stop();
    }
}
