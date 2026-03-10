import {Router} from 'express'
import { Load } from './loadController.js';
export const loadRouter= Router();

loadRouter.post('/addLoad',Load.addingLoad);