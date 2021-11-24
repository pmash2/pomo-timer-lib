import Stopwatch from './stopwatch';
import sleep from './sleep';
import { TimeUtilities } from './time-formatter';
import Timer from './timer';
import { eventEmitter } from './eventEmitter';

const runTimer = async (timer: Stopwatch, length: number) => {
    timer.start();
    await sleep(length);
    timer.stop();

    console.log(`Elapsed (ms): ${timer.Elapsed}`);
    let tmStr = TimeUtilities.msToString(timer.Elapsed);
    console.log(`Elapsed (str): ${tmStr}`);
}

const calculateDiff = (tm1: Stopwatch, tm2: Stopwatch) => {
    let sw1Time = TimeUtilities.msToTime(tm1.Elapsed);
    let sw2Time = TimeUtilities.msToTime(tm2.Elapsed);
    let diff = TimeUtilities.diff(sw2Time, sw1Time);
    console.log(`Difference: ${TimeUtilities.timeToString(diff)}`);
}

const calculateDiff2 = (tm1: Stopwatch, tm2: Stopwatch) => {
    let diff = TimeUtilities.msToTime(tm2.Elapsed - tm1.Elapsed);

    console.log(`Difference 2: ${TimeUtilities.timeToString(diff)}`);
}

const stopwatchTest = async () => {
    let tm1 = new Stopwatch();
    await runTimer(tm1, 2000);

    let tm2 = new Stopwatch();
    await runTimer(tm2, 3000);

    calculateDiff(tm1, tm2);
    calculateDiff2(tm1, tm2);
}

const timerTest = async () => {
    let timer = new Timer({Hours: 0, Minutes: 0, Seconds: 5, Milliseconds: 0});
    timer.start();
    await sleep(2000);
    console.log(`Remaining: ${TimeUtilities.timeToString(timer.Remaining)}`);
}

const main = async () => {
    console.log("Hello world");

    eventEmitter.on("TIMER_COMPLETE", () => {
        console.log("THE TIMER HAS COMPLETED!");
    });

    await timerTest();
    await sleep(8000);
    console.log("DONE");
}

main();
