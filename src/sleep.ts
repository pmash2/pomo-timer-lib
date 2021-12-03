const goToSleep = (ms: number) => new Promise((resolve) => {
        setTimeout(resolve, ms)
    })

const sleep = async (ms: number) => await goToSleep(ms)

export default sleep
