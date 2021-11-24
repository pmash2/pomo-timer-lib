export default class Stopwatch {
    private StartTime: number;

    get Elapsed(): number {
        return Date.now() - this.StartTime;
    }
    
    constructor() {
        this.StartTime = 0;
    }

    start() {
        this.StartTime = Date.now();
        console.log(`Started stopwatch at ${this.StartTime}`);
    }

    stop() {
        console.log(`Stopped stopwatch at ${Date.now()}`);
        this.StartTime = 0;
    }
}
