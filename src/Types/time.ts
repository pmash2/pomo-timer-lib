export default class Time {
	public Hours: number
	public Minutes: number
	public Seconds: number
	public Milliseconds: number

	constructor(h: number, m: number, s: number, ms: number) {
		this.Hours = h
		this.Minutes = m
		this.Seconds = s
		this.Milliseconds = ms
	}

	ToString = (showMS: boolean = true): string => {
		let timeString = ""

		if (this.Hours) {
			timeString = this.zeroPad(this.Hours, 2) + ":"
		}

		timeString += this.zeroPad(this.Minutes, 2) + ":"
		timeString += this.zeroPad(this.Seconds, 2)

		if (showMS) {
			timeString += "." + this.zeroPad(this.Milliseconds, 3)
		}

		return timeString
	}

	private zeroPad = (numberToPad: number, totalCharLength: number): string => {
		return `0${numberToPad}`.slice(-totalCharLength)
	}
}