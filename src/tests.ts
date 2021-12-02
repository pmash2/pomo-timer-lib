import * as modFuncs from './index'
import sleep from "./sleep"

const main = async () => {
    console.log("Hello world")
    let timer = modFuncs.getTimer(0, 0, 5, 0)

    timer.on("TIMER_COMPLETE", () => {
        console.log("THE TIMER HAS COMPLETED!")
        timer.stop()
    })

    timer.start()
    for (let i = 1; i < 10; i++) {
        console.log(`Remaining: ${timer.Remaining.ToString()}`)
        await sleep(1000)
    }

    console.log("DONE")
}

main()
