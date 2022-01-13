import Stopwatch from "../Helpers/stopwatch"
import TimeUtilities from "../Helpers/time-formatter"
import sleep from "../Helpers/sleep"
import EventEmitter from "events"
import Time from "./time"
import * as Enums from "../Enums/enums"

export default class Timer extends EventEmitter {
	private Watch: Stopwatch
	public Span: Time

	get Remaining(): Time {
		if (this.Watch.Elapsed > 0) {
			let stopwatchTime = TimeUtilities.msToTime(this.Watch.Elapsed)
			return TimeUtilities.diff(this.Span, stopwatchTime)
		} else {
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

		this.emit(Enums.EmitString.TimerComplete)
	}

	stop() {
		this.Watch.stop()
	}
}
