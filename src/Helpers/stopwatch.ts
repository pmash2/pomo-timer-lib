export default class Stopwatch {
    private StartTime: number

    get Elapsed(): number {
        if (this.StartTime > 0)
            return Date.now() - this.StartTime
        else
            return 0
    }
    
    constructor() {
        this.StartTime = 0
    }

    start() {
        this.StartTime = Date.now()
    }

    stop() {
        this.StartTime = 0
    }
}
