import * as modFuncs from './index'
import sleep from "./Helpers/sleep"

const emitStrings = modFuncs.Enums.EmitString

const main = async () => {
	console.log("Hello world")

	let wrk = modFuncs.getTimer(0, 0, 5, 0)
	let brk = modFuncs.getTimer(0, 0, 3, 0)
	let p = modFuncs.getPomodoro(wrk, brk)
	p.on(emitStrings.PomodoroComplete, () => {
		console.log(`EVENT EMITTED: ${emitStrings.PomodoroComplete}!`)
	})
	p.on(emitStrings.BreakComplete, () => {
		console.log(`EVENT EMITTED: ${emitStrings.BreakComplete}!`)
		p.restart()
	})

	console.log(`State: ${p.CurrentState}`)

	await p.start()
	for (let i = 1; i < 10; i++) {
		const stateStr = `State: ${p.CurrentState.toString()}`
		const remStr = `Remaining: ${p.Remaining.ToString(false)}`
		const origStr = `Original Time: ${p.OriginalTime.ToString()}`
		const percentStr = `${p.PercentCompleted}% completed`
		const remPerStr = `${p.PercentRemaining}% remaining`

		console.log([stateStr, remStr, origStr, percentStr, remPerStr].join(", "))
		await sleep(1000)
	}

	console.log("DONE")
}

main()
