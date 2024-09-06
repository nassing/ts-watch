import { ButtonModel, WatchMode } from "../model/ButtonModel";
import { WatchModel } from "../model/WatchModel";
import { mod } from "../utils/mathUtils";
import { WatchView } from "../view/WatchView";

export class WatchController {
  private model: WatchModel;
  private view: WatchView;

  private buttonModel: ButtonModel;

  constructor(model: WatchModel, view: WatchView, buttonModel: ButtonModel) {
    this.model = model;
    this.view = view;
    this.buttonModel = buttonModel;

    this.view.getWatchMode = () => this.buttonModel.getMode();
    this.view.getLightMode = () => this.model.getLightMode();
    this.view.getTime = () => this.model.getTime();
    this.view.getTempWatchMode = () => this.getTempWatchMode();

    this.view.render();

    // Do not use setTimeout
    // Use arrow function to keep the context of 'this'
    setInterval(() => this.incrementTime(), 1000);
  }

  getTempWatchMode(): WatchMode | undefined {
    const isWatchModeTemporary = this.buttonModel.getIsListeningToClicks();

    if (!isWatchModeTemporary) {
      return undefined;
    } else {
      switch(mod(this.buttonModel.getClickCount(),3)) {
        case 1:
          return 'editHoursMode';
        case 2:
          return 'editMinutesMode';
        case 0:
          return 'uneditableMode';
      }
    }
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

    this.view.render();
  }

  increaseHours(): void {
    this.model.setHours(this.model.getHours() + 1);
  }

  increaseMinutes(): void {
    this.model.setMinutes(this.model.getMinutes() + 1);
  }
}
