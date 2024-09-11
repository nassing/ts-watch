import './index.css';

import { WatchModel } from './model/WatchModel';
import { WatchView } from './view/WatchView';
import { WatchController } from './controller/WatchController';

import { ButtonsModel } from './model/ButtonsModel';
import { ButtonsView } from './view/ButtonsView';
import { ButtonsController } from './controller/ButtonsController';

// Not an ideal solution, but perfect for manually testing edge cases
const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

const buttonModel = new ButtonsModel();

const watchView = new WatchView('watch-display');
const buttonView = new ButtonsView('buttons');

new WatchController(watchModel, watchView, buttonModel);
new ButtonsController(buttonModel, buttonView, watchModel, watchView);