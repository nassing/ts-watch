import { WatchButtonsController } from "../controller/WatchButtonsController";
import { WatchController } from "../controller/WatchController";
import { WatchButtonsModel } from "../model/WatchButtonsModel";
import { WatchModel } from "../model/WatchModel";
import { WatchButtonsView } from "../view/WatchButtonsView";
import { WatchView } from "../view/WatchView";

export class Watch {
  private watchController: WatchController;
  private watchButtonsController: WatchButtonsController;

  removeWatch: () => void = () => {};

  constructor() {
    const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

    const buttonModel = new WatchButtonsModel();
    
    const watchView = new WatchView('watch-display');
    const buttonView = new WatchButtonsView('buttons');
    
    this.watchController = new WatchController(watchModel, watchView, buttonModel);
    this.watchButtonsController = new WatchButtonsController(buttonModel, buttonView, watchModel, watchView);
  }
}