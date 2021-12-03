import Stopwatch from "./stopwatch"
import TimeUtilities from "./time-formatter"
import sleep from "./sleep"
import EventEmitter from "events"
import Time from "./Types/time"
import EmitString from "./Types/emit-strings"

export default class Timer extends EventEmitter {
    private Watch: Stopwatch
    private Span: Time

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
        this.Watch.start()

        let spanMs = TimeUtilities.TimeToMs(this.Span)
        while (spanMs > this.Watch.Elapsed) {
            await sleep(1000)
        }

        this.emit(EmitString.TimerComplete)
    }

    stop() {
        this.Watch.stop()
    }
}
