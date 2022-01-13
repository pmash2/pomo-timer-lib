import * as modFuncs from './index'
import sleep from "./sleep"
import { Enums } from "./"

const main = async () => {
	console.log("Hello world")

	let wrk = modFuncs.getTimer(0, 0, 5, 0)
	let brk = modFuncs.getTimer(0, 0, 3, 0)
	let p = modFuncs.getPomodoro(wrk, brk)
	p.on(Enums.EmitString.PomodoroComplete, () => {
		console.log(`EVENT EMITTED: ${Enums.EmitString.PomodoroComplete}!`)
	})
	p.on(Enums.EmitString.BreakComplete, () => {
		console.log(`EVENT EMITTED: ${Enums.EmitString.BreakComplete}!`)
		p.restart()
	})

	console.log(`State: ${p.CurrentState}`)

	await p.start()
	for (let i = 1; i < 10; i++) {
		console.log(
			`State: ${p.CurrentState.toString()}, Remaining: ${p.Remaining.ToString(
				false
			)}, Original Time: ${p.OriginalTime.ToString()}`
		)
		await sleep(1000)
	}

	console.log("DONE")
}

main()
