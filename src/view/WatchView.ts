import { Time } from "../interface/Time";
import { formatTime } from "../utils/timeUtils";

export type LightMode = 'white' | 'yellow';

export class WatchView {
  private container: HTMLElement;
  private lightMode: LightMode = 'yellow';

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) as HTMLElement;
  }

  render(time: Time): void {
    this.container.innerHTML = '';
    
    const watch = document.createElement('div');
    watch.classList.add(`watch-${this.lightMode}`);

    const display = document.createElement('p');
    display.textContent = formatTime(time);

    watch.appendChild(display);
    this.container.appendChild(watch);
  }
}