# Pomo-Timer-Lib

Library of methods used to manage and run pomodoro timers

## Usage

Basic usage involves creating two timers, one for a work session and one for a break session. These are then used to create a `Pomodoro`.

```TypeScript
const pLib = require("@pmash2/pomo-timer-lib")

const workSession: Timer = pLib.getTimer(0, 30, 0, 0) // Create 30 min timer
const breakSession: Timer = pLib.getTimer(0, 10, 0, 0) // Create 10 min timer

const pomo: Pomodoro = pLib.getPomodoro(workSession, breakSession)
```

At this point, the pomodoro can be started, stopped, or restarted. Upon the completion of either session (work or break), an event is emitted, which is documented in `Enums.EmitString`:

```js
...
pomo.on(pLib.Enums.EmitString.PomodoroComplete, pomoCompleteFunc)
pomo.on(pLib.Enums.EmitString.BreakComplete, breakCompleteFunc)

await pomo.start()
```

`Enums` also exposes the different states a pomodoro can be in via `Enums.PomodoroState`, which corresponds to the value returned via `.CurrentState` on your pomodoro object.
