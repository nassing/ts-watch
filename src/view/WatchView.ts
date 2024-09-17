import { Time } from "../interface/Time";
import { LightMode, WatchMode } from "../model/WatchModel";
import { formatWatchMode } from "../utils/textUtils";
import { formatTime } from "../utils/timeUtils";

export class WatchView {
  private watchDisplay: HTMLElement;
  private buttons: HTMLElement;
  private watchNumber: number;


  constructor(watchDisplayId: string, buttonsId: string, watchNumber: number) {
    this.watchDisplay = document.getElementById(`${watchDisplayId}-${watchNumber}`);
    this.buttons = document.getElementById(`${buttonsId}-${watchNumber}`);
    this.watchNumber = watchNumber;
  }

  getWatchMode: () => WatchMode = () => 'uneditableMode';
  getTempWatchMode: () => WatchMode | undefined = () => 'uneditableMode';
  getLightMode: () => LightMode = () => 'yellow';
  getTime: () => Time = () => ({ hours: 0, minutes: 0, seconds: 0 });
  onLightModeButtonClick: () => void = () => {};
  onIncreaseButtonClick: () => void = () => {};
  onSwitchModeButtonClick: () => void = () => {};
  removeWatch: () => void = () => {};

  render(): void {
    this.watchDisplay.innerHTML = '';

    const watch = document.getElementById(`watch-${this.watchNumber}`);
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


    this.buttons.innerHTML = '';

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '';
    increaseButton.onclick = this.onIncreaseButtonClick;
    this.buttons.appendChild(increaseButton);

    const switchModeButton = document.createElement('button');
    switchModeButton.textContent = '';
    switchModeButton.onclick = this.onSwitchModeButtonClick;
    this.buttons.appendChild(switchModeButton);
    
    const lightModeButton = document.createElement('button');
    lightModeButton.textContent = '';
    lightModeButton.onclick = this.onLightModeButtonClick;
    this.buttons.appendChild(lightModeButton);

    const removeWatchButton = document.createElement('button');
    increaseButton.textContent = '';
    increaseButton.onclick = this.removeWatch;
    this.buttons.appendChild(removeWatchButton);
  }
}
