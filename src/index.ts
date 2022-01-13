import Timer from "./Types/timer"
import Pomodoro from "./Types/pomodoro"
import Time from "./Types/time"
import TimeUtilities from "./Helpers/time-formatter"
import * as Enums from "./Enums/enums"

export { Time, Timer, Pomodoro, Enums, TimeUtilities }

export const getTimer = (h: number, m: number, s: number, ms: number): Timer =>
	new Timer(new Time(h, m, s, ms))

export const getPomodoro = (wrk: Timer, brk: Timer): Pomodoro => new Pomodoro(wrk, brk)
