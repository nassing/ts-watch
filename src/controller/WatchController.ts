import { WatchModel } from "../model/WatchModel";
import { WatchView } from "../view/WatchView";

export class WatchController {
    private model: WatchModel;
    private view: WatchView;

    constructor(model: WatchModel, view: WatchView) {
        this.model = model;
        this.view = view;
    }

    incrementTime(): void {
        this.model.setSeconds(this.model.getSeconds());

        if (this.model.getSeconds() > 59) {
            this.model.setMinutes(this.model.getMinutes() + 1);
            this.model.setSeconds(this.model.getSeconds() - 60);
        }

        if (this.model.getMinutes() > 59) {
            this.model.setHours(this.model.getMinutes() + 1);
            this.model.setMinutes(this.model.getSeconds() - 60);
        }

        if (this.model.getHours() > 99) {
            this.model.setHours(0);
        }
    }
}