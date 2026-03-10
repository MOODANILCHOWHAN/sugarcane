import {Router} from 'express'
import { Load } from './loadController.js';
const loadRouter= Router();

loadRouter.post('/addLoad',Load.addingLoad);

export default loadRouter;