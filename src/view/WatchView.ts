import { Time } from "../interface/Time";
import { formatTime } from "../utils/timeUtils";

export type LightMode = 'white' | 'yellow';

export class WatchView {
  private element: HTMLElement;
  private lightMode: LightMode = 'yellow';

  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
  }

  setLightMode(lightMode: LightMode): void {
    this.lightMode = lightMode;
  }

  getLightMode(): LightMode {
    return this.lightMode;
  }

  onLightModeButtonClick: () => void = () => {};
  onIncreaseButtonClick: () => void = () => {};
  onSwitchModeButtonClick: () => void = () => {};
  getWatchMode: () => string = () => '';

  render(time: Time): void {
    this.element.innerHTML = '';
    
    const watch = document.createElement('div');
    watch.classList.add(`watch-${this.lightMode}`);

    const display = document.createElement('p');
    display.textContent = formatTime(time);
    watch.appendChild(display);

    const lightModeButton = document.createElement('button');
    lightModeButton.textContent = 'Change light mode';
    lightModeButton.onclick = this.onLightModeButtonClick;
    watch.appendChild(lightModeButton);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Increase';
    increaseButton.onclick = this.onIncreaseButtonClick;
    watch.appendChild(increaseButton);

    const switchModeButton = document.createElement('button');
    switchModeButton.textContent = this.getWatchMode();
    switchModeButton.onclick = this.onSwitchModeButtonClick;
    watch.appendChild(switchModeButton);
    
    this.element.appendChild(watch);
  }
}
