import Timer from './timer';
import sleep from './sleep';

const main = async () => {
    console.log("Hello world");

    let tm = new Timer();

    tm.start();
    await sleep(3000);
    tm.stop();

    console.log(`Elapsed: ${tm.Elapsed}`);
}

main();