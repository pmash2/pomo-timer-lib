# Pomo-Timer-Lib

Library of methods used to manage and run pomodoro timers

## Usage

Thanks to `ts-node`, you can run via `npm start` without compiling. Otherwise, `npm run build`, then `node dist/index.js`

## Development

Instead of publishing to the global npm registry, I've been using [yalc](https://github.com/wclr/yalc) to keep changes local. Here is the workflow:

1. Make changes to pomo-timer-lib, commit, tag
2. `yalc publish`
3. Inside the project that will be using this package, run `yalc add pomo-timer-lib`
