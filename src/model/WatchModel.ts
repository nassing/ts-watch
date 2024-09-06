import { Time } from "../interface/Time";

export type WatchMode = 'editHoursMode' | 'editMinutesMode' | 'uneditableMode';

export class WatchModel {
  private time: Time;
  private mode: WatchMode = 'uneditableMode';
  private clickCount = 0;

  constructor(hours: number, minutes: number, seconds: number) {
    this.time = {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  getTime(): Time {
    return this.time;
  }

  getHours(): number {
    return this.time.hours;
  }

  getMinutes(): number {
    return this.time.minutes;
  }

  getSeconds(): number {
    return this.time.seconds;
  }

  setHours(hours: number): void {
    this.time.hours = hours;
  }

  setMinutes(minutes: number): void {
    this.time.minutes = minutes;
  }

  setSeconds(seconds: number): void {
    this.time.seconds = seconds;
  }



  getMode(): WatchMode {
    return this.mode;
  }

  setMode(mode: WatchMode): void {
    this.mode = mode;
  }
}