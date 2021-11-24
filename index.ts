import Stopwatch from './stopwatch';
import sleep from './sleep';
import { TimeUtilities } from './time-formatter';

const main = async () => {
    console.log("Hello world");

    let tm = new Stopwatch();

    tm.start();
    await sleep(2000);
    tm.stop();

    console.log(`Elapsed (ms): ${tm.Elapsed}`);

    let tmStr = TimeUtilities.msToString(tm.Elapsed);

    console.log(`Elapsed (str): ${tmStr}`);
}

main();
