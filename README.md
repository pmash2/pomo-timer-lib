# Pomo-Timer-Lib

Library of methods used to manage and run pomodoro timers

## Usage

Thanks to `ts-node`, you can run via `npm start` without compiling. Otherwise, `npm run build`, then `node dist/index.js`

## Development

To create local packages for use in other projects:

1. Increment version in `package.json`
2. Run `npm pack`
3. Take `.tgz` file that was created and move it to a local package location (e.g., `~/source/npm_packages`)
4. Go to the project you want to use package in
5. Run `npm install`, pointing to the location you placed the package (e.g., `npm install ~/source/npm_packages/pomo-timer-lib-0.1.2.tgz`)
