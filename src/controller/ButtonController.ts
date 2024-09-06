import { ButtonModel } from "../model/ButtonModel";
import { WatchModel } from "../model/WatchModel";
import { mod } from "../utils/mathUtils";
import { WatchView } from "../view/WatchView";

export class ButtonController {
  private model: ButtonModel;
  private view: WatchView;

  private watchModel: WatchModel;

  constructor(model: ButtonModel, view: WatchView, watchModel: WatchModel) {
    this.model = model;
    this.view = view;
    this.watchModel = watchModel;

    this.view.onLightModeButtonClick = () => this.handleLightModeButton();
    this.view.onIncreaseButtonClick = () => this.handleIncreaseButton();
    this.view.onSwitchModeButtonClick = () => this.handleModeButton();
    this.view.getWatchMode = () => this.model.getMode();
  }

  handleLightModeButton(): void {
    this.model.setIsListeningToClicks(false);

    if (this.view.getLightMode() === 'white') {
      this.view.setLightMode('yellow');
    } else {
      this.view.setLightMode('white');
    }

    this.view.render(this.watchModel.getTime());
  }

  handleIncreaseButton(): void {
    if (this.model.getMode() === 'editHoursMode') {
      this.watchModel.setHours(this.watchModel.getHours() + 1);
    } else if (this.model.getMode() === 'editMinutesMode') {
      this.watchModel.setMinutes(this.watchModel.getMinutes() + 1);
    }
  }

  handleModeButton(): void {
    this.model.setClickCount(this.model.getClickCount() + 1);

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
  }
}
