import Timer from './timer'
import Pomodoro from './Types/pomodoro'
import Time from './Types/time'
import EmitString from './Types/emit-strings'
import TimeUtilities from './time-formatter'
import PomodoroState from "./Types/pomodoro-state"

export { Time, Timer, Pomodoro, EmitString, TimeUtilities, PomodoroState }

export const getTimer = (h: number, m: number, s: number, ms: number): Timer =>
	new Timer(new Time(h, m, s, ms))

export const getRemainingTime = (timer: Timer): string => timer.Remaining.ToString()

export const getPomodoro = (wrk: Timer, brk: Timer): Pomodoro =>
    new Pomodoro(wrk, brk)