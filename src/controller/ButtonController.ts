import { ButtonModel } from "../model/ButtonModel";
import { WatchModel } from "../model/WatchModel";
import { mod } from "../utils/mathUtils";
import { ButtonView } from "../view/ButtonView";
import { WatchView } from "../view/WatchView";

export class ButtonController {
  private model: ButtonModel;
  private view: ButtonView;

  private watchModel: WatchModel;
  private watchView: WatchView;

  constructor(model: ButtonModel, view: ButtonView, watchModel: WatchModel, watchView: WatchView) {
    this.model = model;
    this.view = view;
    this.watchModel = watchModel;
    this.watchView = watchView;

    this.view.onLightModeButtonClick = () => this.handleLightModeButton();
    this.view.onIncreaseButtonClick = () => this.handleIncreaseButton();
    this.view.onSwitchModeButtonClick = () => this.handleModeButton();

    this.view.render();
  }

  handleLightModeButton(): void {
    if (this.watchModel.getLightMode() === 'white') {
      this.watchModel.setLightMode('yellow');
    } else {
      this.watchModel.setLightMode('white');
    }

    this.watchView.render();
  }

  handleIncreaseButton(): void {
    if (this.model.getMode() === 'editHoursMode') {
      this.watchModel.setHours(this.watchModel.getHours() + 1);
    } else if (this.model.getMode() === 'editMinutesMode') {
      this.watchModel.setMinutes(this.watchModel.getMinutes() + 1);
    }

    this.watchView.render();
  }

  handleModeButton(): void {
    this.model.setClickCount(this.model.getClickCount() + 1);
    this.watchView.render();

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

    this.watchView.render();
  }
}
