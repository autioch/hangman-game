const MILISECOND = 1000;
const MINUTE = 60;
const HOUR = 60;

module.exports = class Timer {
  constructor() {
    this.total = 0;
    this.startTime = 0;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.startTime = Date.now();
  }

  stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    this.total += Date.now() - this.startTime;
  }

  reset() {
    this.stop();
    this.total = 0;
  }

  getTimeSpent() {
    const totalSeconds = Math.floor(this.total / MILISECOND);
    const seconds = totalSeconds % MINUTE;
    const totalMinutes = (totalSeconds - seconds) / MINUTE;
    const minutes = totalMinutes % HOUR;
    const hours = (totalMinutes - minutes) / HOUR;

    return {
      hours,
      minutes,
      seconds
    };
  }
};
