export default class Stopwatch {
    private StartTime: number;
    public Elapsed: number;
    
    constructor() {
        this.StartTime = 0;
        this.Elapsed = 0;
    }

    start() {
        this.StartTime = Date.now();
        console.log(`Started stopwatch at ${this.StartTime}`);
    }

    stop() {
        console.log(`Stopped stopwatch at ${Date.now()}`);
        this.Elapsed += Date.now() - this.StartTime;
        this.StartTime = 0;
    }
}
