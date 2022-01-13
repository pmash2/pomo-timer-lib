import { Time } from ".."
import Timer from "./timer"
import EventEmitter from "events"
import * as Enums from "../Enums/enums"

const pomoStates = Enums.PomodoroState
const emitStrings = Enums.EmitString
export default class Pomodoro extends EventEmitter {
	private WorkTimer: Timer
	private BreakTimer: Timer
	private State: Enums.PomodoroState

	get Remaining(): Time {
		switch (this.State) {
			case pomoStates.Pomodoro:
				return this.WorkTimer.Remaining
			case pomoStates.Break:
				return this.BreakTimer.Remaining
			default:
				return new Time(0, 0, 0, 0)
		}
	}

	get CurrentState(): Enums.PomodoroState {
		return this.State
	}

	get OriginalTime(): Time {
		switch (this.State) {
			case pomoStates.Pomodoro:
				return this.WorkTimer.Span
			case pomoStates.Break:
				return this.BreakTimer.Span
			default:
				return new Time(0, 0, 0, 0)
		}
	}

	constructor(workTimer: Timer, breakTimer: Timer) {
		super()
		this.WorkTimer = workTimer
		this.BreakTimer = breakTimer
		this.State = pomoStates.PendingStart

		this.WorkTimer.on(emitStrings.TimerComplete, this.pomoComplete)
		this.BreakTimer.on(emitStrings.TimerComplete, this.breakComplete)
	}

	async start(): Promise<void> {
		if (this.State === pomoStates.PendingStart) {
			this.startTimer(this.WorkTimer)
			this.changePomoState(pomoStates.Pomodoro)
		}
	}

	stop(): void {
		let tmToStop = this.State === pomoStates.Pomodoro ? this.WorkTimer : this.BreakTimer
		this.stopTimer(tmToStop)
		this.changePomoState(pomoStates.Cancelled)
	}

	async restart(): Promise<void> {
		let tmToStop = this.State === pomoStates.Pomodoro ? this.WorkTimer : this.BreakTimer
		this.stopTimer(tmToStop)
		this.changePomoState(pomoStates.PendingStart)
		this.start()
	}

	private pomoComplete = (): void => {
		this.stopTimer(this.WorkTimer)
		this.startTimer(this.BreakTimer)

		this.changePomoState(pomoStates.Break)
		this.emit(emitStrings.PomodoroComplete)
	}

	private breakComplete = (): void => {
		this.stopTimer(this.BreakTimer)
		this.changePomoState(pomoStates.Completed)
		this.emit(emitStrings.BreakComplete)
	}

	private changePomoState = (s: Enums.PomodoroState): Enums.PomodoroState => (this.State = s)
	private startTimer = (t: Timer): Promise<void> => t.start()
	private stopTimer = (t: Timer): void => t.stop()
}
