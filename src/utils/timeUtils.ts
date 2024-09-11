import { Time } from "../interface/Time";
import { WatchMode } from "../model/WatchButtonsModel";

export function formatDigit(digit: number): string {
  return digit < 10 
  ? '0' + digit.toString()
  : digit.toString();
}

export function formatTime(time: Time, watchMode: WatchMode): string {
  return `<span${watchMode == 'editHoursMode' ? ' class="blink"' : null}>${formatDigit(time.hours)}</span>:`
  + `<span${watchMode == 'editMinutesMode' ? ' class="blink"' : null}>${formatDigit(time.minutes)}</span>:`
  + `<span>${formatDigit(time.seconds)}</span>`;
}
