import { WatchController } from "../controller/WatchController";
import { WatchModel } from "../model/WatchModel";
import { WatchView } from "../view/WatchView";

export class Watch {
  private watchController: WatchController;
  private watchNumber: number;

  removeWatch: () => void = () => {};

  constructor(watchNumber: number) {
    const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
    
    const watchView = new WatchView('watch-display', 'buttons', watchNumber);
    
    this.watchController = new WatchController(watchModel, watchView, this.removeWatch);
  }

  render(): void {
    this.watchController.render();
  }

  setWatchNumber(watchNumber: number): void {
    this.watchNumber = watchNumber;
  }

  getWatchNumber(): number {
    return this.watchNumber;
  }
}