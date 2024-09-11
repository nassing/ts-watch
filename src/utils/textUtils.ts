import { WatchMode } from "../model/ButtonsModel";

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