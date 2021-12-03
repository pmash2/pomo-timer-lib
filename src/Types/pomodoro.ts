
import { Time } from ".."
import Timer from "../timer"
import PomodoroState from "./pomodoro-state"
import EventEmitter from "events"
import EmitString from "./emit-strings"

export default class Pomodoro extends EventEmitter {
    private WorkTimer: Timer
    private BreakTimer: Timer
    private State: PomodoroState

    get Remaining(): Time {
        switch (this.State) {
            case PomodoroState.Pomodoro:
                return this.WorkTimer.Remaining
            case PomodoroState.Break:
                return this.BreakTimer.Remaining
            default:
                return new Time(0, 0, 0, 0)
        }
    }

    get CurrentState(): PomodoroState {
        return this.State
    }

    constructor(workTimer: Timer, breakTimer: Timer) {
        super()
        this.WorkTimer = workTimer
        this.BreakTimer = breakTimer
        this.State = PomodoroState.PendingStart

        this.WorkTimer.on(EmitString.TimerComplete, this.pomoComplete)
        this.BreakTimer.on(EmitString.TimerComplete, this.breakComplete)
    }

    async start(): Promise<void> {
        if (this.State === PomodoroState.PendingStart) {
            this.startTimer(this.WorkTimer)
            this.changePomoState(PomodoroState.Pomodoro)
        }
    }

    stop(): void {
        let tmToStop = this.State === PomodoroState.Pomodoro ? this.WorkTimer : this.BreakTimer
        this.stopTimer(tmToStop)
        this.changePomoState(PomodoroState.Cancelled)
    }

    private pomoComplete = (): void => {
        this.stopTimer(this.WorkTimer)
        this.startTimer(this.BreakTimer)

        this.changePomoState(PomodoroState.Break)
        this.emit(EmitString.PomodoroComplete)
    }

    private breakComplete = (): void => {
        this.stopTimer(this.BreakTimer)
        this.changePomoState(PomodoroState.Completed)
        this.emit(EmitString.BreakComplete)
    }

    private changePomoState = (s: PomodoroState): PomodoroState => this.State = s
    private startTimer = (t: Timer): Promise<void> => t.start()
    private stopTimer = (t: Timer): void => t.stop()
}