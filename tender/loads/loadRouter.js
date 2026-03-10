import {Router} from 'express'
import { LoadControllers } from './loadController.js';
const loadRouter= Router();

loadRouter.post('/addLoad',LoadControllers.addingLoad);

export default loadRouter;