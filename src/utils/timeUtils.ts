import { Time } from "../interface/Time";

export function formatDigit(digit: number): string {
    return digit < 10 
    ? '0' + digit.toString()
    : digit.toString();
}

export function formatTime(time: Time): string {
    return formatDigit(time.hours) + ':'
    + formatDigit(time.minutes) + ':'
    + formatDigit(time.seconds);
}