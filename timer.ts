export default class Timer {
    private StartTime: number;
    public Elapsed: number;
    
    constructor() {
        this.StartTime = 0;
        this.Elapsed = 0;
    }

    start() {
        this.StartTime = Date.now();
        console.log(`Started timer at ${this.StartTime}`);
    }

    stop() {
        console.log(`Stopped timer at ${Date.now()}`);
        this.Elapsed += Date.now() - this.StartTime;
        this.StartTime = 0;
    }
}
