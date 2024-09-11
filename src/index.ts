import './index.css';

import { WatchModel } from './model/WatchModel';
import { WatchView } from './view/WatchView';
import { WatchController } from './controller/WatchController';

import { WatchButtonsModel } from './model/WatchButtonsModel';
import { WatchButtonsView } from './view/WatchButtonsView';
import { WatchButtonsController } from './controller/WatchButtonsController';

// Not an ideal solution, but perfect for manually testing edge cases
const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

const buttonModel = new WatchButtonsModel();

const watchView = new WatchView('watch-display');
const buttonView = new WatchButtonsView('buttons');

new WatchController(watchModel, watchView, buttonModel);
new WatchButtonsController(buttonModel, buttonView, watchModel, watchView);