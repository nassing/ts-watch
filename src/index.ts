import { WatchController } from './controller/WatchController';
import './index.css';

import { WatchModel } from './model/WatchModel';
import { WatchView } from './view/WatchView';

const watchModel = new WatchModel(1,2,3);
const watchView = new WatchView('watch');
const watchController = new WatchController(watchModel, watchView);

// Do not use setTimeout
setInterval(watchController.incrementTime, 1000);


