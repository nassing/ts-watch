import './index.css';

import { WatchWallModel } from './model/WatchWallModel';
import { WatchWallView } from './view/WatchWallView';
import { WatchWallController } from './controller/WatchWallController';

// Not an ideal solution, but perfect for manually testing edge cases
const watchWallModel = new WatchWallModel();
const watchWallView = new WatchWallView('watch-wall');

new WatchWallController(watchWallModel, watchWallView);