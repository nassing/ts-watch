import { WatchMode, WatchModel } from "../model/WatchModel";
import { mod } from "../utils/mathUtils";
import { WatchView } from "../view/WatchView";

export class WatchController {
  private model: WatchModel;
  private view: WatchView;

  constructor(model: WatchModel, view: WatchView, removeWatch: () => void) {
    this.model = model;
    this.view = view;

    this.view.removeWatch = removeWatch;

    this.view.getLightMode = () => this.model.getLightMode();
    this.view.getTime = () => this.model.getTime();
    this.view.getTempWatchMode = () => this.getTempWatchMode();
    this.view.onLightModeButtonClick = () => this.handleLightModeButton();
    this.view.onIncreaseButtonClick = () => this.handleIncreaseButton();
    this.view.onSwitchModeButtonClick = () => this.handleModeButton();

    this.view.render();

    // Do not use setTimeout
    // Use arrow function to keep the context of 'this'
    setInterval(() => this.incrementTime(), 1000);
  }

  getTempWatchMode(): WatchMode | undefined {
    const isWatchModeTemporary = this.model.getIsListeningToClicks();

    if (!isWatchModeTemporary) {
      return undefined;
    } else {
      switch(mod(this.model.getClickCount(),3)) {
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

  handleLightModeButton(): void {
    if (this.model.getLightMode() === 'white') {
      this.model.setLightMode('yellow');
    } else {
      this.model.setLightMode('white');
    }

    this.view.render();
  }

  handleIncreaseButton(): void {
    if (this.model.getMode() === 'editHoursMode') {
      this.model.setHours(this.model.getHours() + 1);
    } else if (this.model.getMode() === 'editMinutesMode') {
      this.model.setMinutes(this.model.getMinutes() + 1);
    }

    this.view.render();
  }

  handleModeButton(): void {
    this.model.setClickCount(this.model.getClickCount() + 1);
    this.view.render();

    if (!this.model.getIsListeningToClicks()) {
      this.model.setIsListeningToClicks(true);

      setTimeout(() => this.handleModeButtonTimeout(), 700);
    }
  }

  handleModeButtonTimeout(): void {
    if (mod(this.model.getClickCount(), 3) === 1) {
      this.model.setMode('editHoursMode');
    } else if (mod(this.model.getClickCount(), 3) === 2) {
      this.model.setMode('editMinutesMode');
    } else {
      this.model.setMode('uneditableMode');
    }

    this.model.setIsListeningToClicks(false);
    this.model.setClickCount(0);

    this.view.render();
  }

  render(): void {
    this.view.render();
  }
}
