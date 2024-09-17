import { Watch } from "../interface/Watch";

export class WatchWallView {
    private wall: HTMLElement;

    contructor(wall: HTMLElement) {
        this.wall = wall;
    }

    onIncreaseTimezoneButtonClick: () => void = () => {};
    onDecreaseTimezoneButtonClick: () => void = () => {};
    onCreateClockClick: () => void = () => {};
    getWatches: () => Watch[] = () => null;
    getTimezone: () => number = () => 0;

    public render() {
        const watches: Watch[] = this.getWatches();

        watches.forEach(watch => {
            watch.
        })
    }
}