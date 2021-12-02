import Stopwatch from "./stopwatch"
import TimeUtilities from "./time-formatter"
import sleep from "./sleep"
import EventEmitter from "events"
import Time from "./Types/time"

export default class Timer extends EventEmitter {
    private Watch: Stopwatch
    public Span: Time

    get Remaining(): Time {
        if (this.Watch.Elapsed > 0) {
            let stopwatchTime = TimeUtilities.msToTime(this.Watch.Elapsed)
            return TimeUtilities.diff(this.Span, stopwatchTime)
        }
        else {
            return new Time(0, 0, 0, 0)
        }
    }

    constructor(timerLength: Time) {
        super()
        this.Watch = new Stopwatch()
        this.Span = timerLength
    }

    async start() {
        console.log("Starting timer...")
        this.Watch.start()

        let spanMs = TimeUtilities.TimeToMs(this.Span)
        while (spanMs > this.Watch.Elapsed) {
            await sleep(1000)
        }

        this.emit("TIMER_COMPLETE")
    }

    stop() {
        console.log("Stopping timer...")
        this.Watch.stop()
    }
}
