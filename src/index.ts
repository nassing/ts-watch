import { ButtonController } from './controller/ButtonController';
import { WatchController } from './controller/WatchController';
import './index.css';
import { ButtonModel } from './model/ButtonModel';

import { WatchModel } from './model/WatchModel';
import { WatchView } from './view/WatchView';

// Not an ideal solution, but perfect for manually testing edge cases
const watchModel = new WatchModel(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

const watchView = new WatchView('watch');
const watchController = new WatchController(watchModel, watchView);

const buttonModel = new ButtonModel();
const buttonController = new ButtonController(buttonModel, watchView, watchModel);