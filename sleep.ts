export default async (ms: number) => {
    console.log("Going to sleep");
    await sleep(ms);
    console.log("Awake");
}

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        console.log("sleeping...");
        setTimeout(resolve, ms);
    })
};