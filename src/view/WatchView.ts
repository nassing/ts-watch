import { Time } from "../interface/Time";
import { WatchMode } from "../model/ButtonModel";
import { LightMode } from "../model/WatchModel";
import { formatWatchMode } from "../utils/textUtils";
import { formatTime } from "../utils/timeUtils";

export class WatchView {
  private watchDisplay: HTMLElement;

  constructor(watchDisplayId: string) {
    this.watchDisplay = document.getElementById(watchDisplayId);
  }

  getWatchMode: () => WatchMode = () => 'uneditableMode';
  getTempWatchMode: () => WatchMode | undefined = () => 'uneditableMode';
  getLightMode: () => LightMode = () => 'yellow';
  getTime: () => Time = () => ({ hours: 0, minutes: 0, seconds: 0 });

  render(): void {
    this.watchDisplay.innerHTML = '';

    const watch = document.getElementById('watch');
    watch.classList.remove('watch-white');
    watch.classList.remove('watch-yellow');
    watch.classList.add(`watch-${this.getLightMode()}`);

    const displayWrapper = document.createElement('div');
    displayWrapper.classList.add('watch-text');
    this.watchDisplay.appendChild(displayWrapper);

    const display = document.createElement('p');
    display.innerHTML = formatTime(this.getTime(), this.getWatchMode());
    displayWrapper.appendChild(display);

    const modeWrapper = document.createElement('div');
    modeWrapper.classList.add('watch-text');
    modeWrapper.classList.add('watch-mode-text');
    modeWrapper.classList.remove('watch-text-temporary');
    if(this.getTempWatchMode()) {
      modeWrapper.classList.add('watch-text-temporary');
    }
    this.watchDisplay.appendChild(modeWrapper);

    const mode = document.createElement('p');
    mode.textContent = formatWatchMode(this.getTempWatchMode() || this.getWatchMode());
    modeWrapper.appendChild(mode);
  }
}
