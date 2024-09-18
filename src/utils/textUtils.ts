import { WatchMode } from "../model/WatchModel";

export function formatWatchMode(watchMode: WatchMode): string {
  switch (watchMode) {
    case 'uneditableMode':
      return 'Locked';
    case 'editHoursMode':
      return 'Editting hours';
    case 'editMinutesMode':
      return 'Editting minutes';
  }
}

export function formatGMT(timezone: number): string {
  if (timezone === 0) {
    return 'GMT';
  } else if (timezone > 0) {
    return `GMT+${timezone}`;
  } else {
    return `GMT${timezone}`;
  }
}