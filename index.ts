import Timer from './timer';
import sleep from './sleep';
import { TimeUtilities } from './time-formatter';

const main = async () => {
    console.log("Hello world");

    let tm = new Timer();

    tm.start();
    await sleep(2000);
    tm.stop();

    console.log(`Elapsed (ms): ${tm.Elapsed}`);

    let tmStr = TimeUtilities.msToString(tm.Elapsed);

    console.log(`Elapsed (str): ${tmStr}`);
}

main();
