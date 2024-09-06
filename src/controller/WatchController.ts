import { WatchMode, WatchModel } from "../model/WatchModel";
import { WatchView } from "../view/WatchView";

export class WatchController {
  private model: WatchModel;
  private view: WatchView;

  constructor(model: WatchModel, view: WatchView) {
    this.model = model;
    this.view = view;

    // Do not use setTimeout
    // Use arrow function to keep the context of 'this'
    setInterval(() => this.incrementTime(), 1000);
  }

  incrementTime(): void {
    this.model.setSeconds(this.model.getSeconds() + 1);

    if (this.model.getSeconds() > 59) {
      this.model.setMinutes(this.model.getMinutes() + 1);
      this.model.setSeconds(this.model.getSeconds() - 60);
    }

    if (this.model.getMinutes() > 59) {
      this.model.setHours(this.model.getHours() + 1);
      this.model.setMinutes(this.model.getMinutes() - 60);
    }

    if (this.model.getHours() > 23) {
      this.model.setHours(0);
    }

    this.view.render(this.model.getTime());
  }

  setMode(mode: WatchMode): void {
    this.model.setMode(mode);
  }

  handleModeClick(): void {
  }

  increase(): void {
    switch (this.model.getMode()) {
      case 'editHoursMode':
        this.increaseHours();
        break;
      case 'editMinutesMode':
        this.increaseMinutes();
        break;
    }
  }

  increaseHours(): void {
    this.model.setHours(this.model.getHours() + 1);
  }

  increaseMinutes(): void {
    this.model.setMinutes(this.model.getMinutes() + 1);
  }
}