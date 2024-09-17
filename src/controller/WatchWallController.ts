import { Watch } from "../interface/Watch";
import { WatchWallModel } from "../model/WatchWallModel";
import { WatchWallView } from "../view/WatchWallView";

export class WatchWallController {
  private model: WatchWallModel;
  private view: WatchWallView;

  public constructor(model: WatchWallModel, view: WatchWallView) {
    this.model = model;
    this.view = view;

    this.view.onIncreaseTimezoneButtonClick = () => this.model.setTimezone(this.model.getTimezone() + 1);
    this.view.onDecreaseTimezoneButtonClick = () => this.model.setTimezone(this.model.getTimezone() - 1);
    this.view.onCreateClockClick = () => this.createWatch();

    this.view.getWatches = () => this.getWatches();
    this.view.getTimezone = () => this.getTimezone();

    this.createWatch();
    this.createWatch();
    this.createWatch();
    this.createWatch();
    this.createWatch();

    this.view.render();
  }

  public createWatch(): void {
    let newWatchNumber;
    const n = this.model.getWatches().length;

    if(n > 0) {
      newWatchNumber = this.model.getWatches()[n - 1].getWatchNumber() + 1;
    } else {
      newWatchNumber = 0;
    }

    this.view.initNewWatch(newWatchNumber);
    const watch: Watch = new Watch(newWatchNumber);
    watch.removeWatch = () => this.removeWatch(watch);
    this.model.createWatch(watch);

    this.view.render();
  }
  public removeWatch(watch: Watch): void {
    this.model.removeWatch(watch);

    this.view.render();
  }

  public getWatches(): Watch[] {
    return this.model.getWatches();
  }
  public getTimezone(): number {
    return this.model.getTimezone();
  }
}