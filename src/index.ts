import './index.css';

import { WatchModel } from './model/WatchModel';
import { WatchView } from './view/WatchView';
import { WatchController } from './controller/WatchController';

import { ButtonModel } from './model/ButtonModel';
import { ButtonView } from './view/ButtonView';
import { ButtonController } from './controller/ButtonController';

// Not an ideal solution, but perfect for manually testing edge cases
const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

const buttonModel = new ButtonModel();

const watchView = new WatchView('watch-display');
const buttonView = new ButtonView('buttons');

new WatchController(watchModel, watchView, buttonModel);
new ButtonController(buttonModel, buttonView, watchModel, watchView);