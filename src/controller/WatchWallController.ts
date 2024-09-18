import { Watch } from "../interface/Watch";
import { WatchWallModel } from "../model/WatchWallModel";
import { WatchWallView } from "../view/WatchWallView";

export class WatchWallController {
  private model: WatchWallModel;
  private view: WatchWallView;

  constructor(model: WatchWallModel, view: WatchWallView) {
    this.model = model;
    this.view = view;

    this.view.onIncreaseTimezoneButtonClick = () => this.onIncreaseTimezoneButtonClick();
    this.view.onDecreaseTimezoneButtonClick = () => this.onDecreaseTimezoneButtonClick();
    this.view.onCreateClockClick = () => this.createWatch();

    this.view.getTimezone = () => this.getTimezone();

    this.view.initRender();

    this.createWatch();
    this.createWatch();
    this.createWatch();
    this.createWatch();
    this.createWatch();
  }

  onIncreaseTimezoneButtonClick(): void {
    this.model.setTimezone(this.model.getTimezone() + 1);
    this.view.renderGMT();
  }

  onDecreaseTimezoneButtonClick(): void {
    this.model.setTimezone(this.model.getTimezone() - 1);
    this.view.renderGMT();
  }

  createWatch(): void {
    let newWatchNumber;
    const n = this.model.getWatches().length;

    if(n > 0) {
      newWatchNumber = this.model.getWatches()[n-1].getWatchNumber() + 1;
    } else {
      newWatchNumber = 0;
    }

    this.view.initNewWatch(newWatchNumber);
    const watch: Watch = new Watch(newWatchNumber);
    watch.removeWatch = () => this.removeWatch(watch);
    this.model.createWatch(watch);
  }

  removeWatch(watch: Watch): void {
    this.model.removeWatch(watch);
  }

  getWatches(): Watch[] {
    return this.model.getWatches();
  }
  getTimezone(): number {
    return this.model.getTimezone();
  }
}