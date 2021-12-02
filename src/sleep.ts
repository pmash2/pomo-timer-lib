const goToSleep = (ms: number) => {
    return new Promise((resolve) => {
        console.log("...sleeping...")
        setTimeout(resolve, ms)
    })
}

const sleep = async (ms: number) => {
    console.log("Going to sleep")
    await goToSleep(ms)
    console.log("Awake!")
}

export default sleep
