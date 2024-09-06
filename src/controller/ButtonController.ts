import { ButtonModel } from "../model/ButtonModel";
import { WatchModel } from "../model/WatchModel";
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
  }

  handleLightModeButton(): void {
    this.model.setListeningToClicks(false);

    if (this.view.getLightMode() === 'white') {
      this.view.setLightMode('yellow');
    } else {
      this.view.setLightMode('white');
    }

    this.view.render(this.watchModel.getTime());
  }

  handleIncreaseButton(): void {
  }

  handleModeButton(): void {
    this.model.setListeningToClicks(false);

    if (this.model.getClickCount() === 1) {
      this.model.setMode('editHoursMode');
    } else if (this.model.getClickCount() === 2) {
      this.model.setMode('editMinutesMode');
    } else {
      this.model.setMode('uneditableMode');
    }

    this.model.setClickCount(0);
  }
}
