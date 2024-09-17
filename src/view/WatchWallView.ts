import { Watch } from "../interface/Watch";

export class WatchWallView {
    private wall: HTMLElement;

    constructor(wallId: string) {
        this.wall = document.getElementById(wallId);
    }

    onIncreaseTimezoneButtonClick: () => void = () => {};
    onDecreaseTimezoneButtonClick: () => void = () => {};
    onCreateClockClick: () => void = () => {};
    getWatches: () => Watch[] = () => null;
    getTimezone: () => number = () => 0;

    public render() {
        const watches: Watch[] = this.getWatches();
        console.log(watches);
        debugger;

        watches.forEach(watch => {
            watch.render();
        })
    }

    public initNewWatch(watchNumber: number) {

        const watchWrapper = document.createElement('div');
        watchWrapper.id = 'watch-wrapper-' + watchNumber;
        watchWrapper.className = 'watch-wrapper';
        watchWrapper.innerHTML = `
        <div id="buttons-${watchNumber}" class="buttons"></div>
        <div id="watch-${watchNumber}" class="watch">
          <div class="button-labels">
            <div>+</div>
            <div style="margin-left: 25px">MODE</div>
            <div>LIGHT</div>
            <div>X</div>
          </div>
          <div id="watch-display-${watchNumber}" class="watch-display"></div>
        </div>
        `;	

        debugger;
        this.wall.appendChild(watchWrapper);
        debugger;
    }
}