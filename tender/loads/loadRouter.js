import {Router} from 'express'
import { Load } from './loadController.js';
export default loadRouter= Router();

loadRouter.post('/addLoad',Load.addingLoad);