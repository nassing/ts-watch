import { Time } from "../interface/Time";
import { formatTime } from "../utils/timeUtils";

export class WatchView {
    private container: HTMLElement;

    constructor(containerId: string) {
        this.container = document.getElementById(containerId) as HTMLElement;
    }

    render(time: Time): void {
        this.container.innerHTML = '';
        
        const watch = document.createElement('div');

        const display = document.createElement('p');
        display.textContent = formatTime(time);

        watch.appendChild(display);
        this.container.appendChild(watch);
    }
}