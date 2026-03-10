import {Router} from 'express'
import { Load } from './loadController';
export const loadRouter= Router();

loadRouter.post('/addLoad',Load.addingLoad);