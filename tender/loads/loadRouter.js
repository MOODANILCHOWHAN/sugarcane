import {Router} from 'express'
import { LoadControllers } from './loadController.js';
const loadRouter= Router();

loadRouter.post('/addLoad',LoadControllers.addingLoad);
loadRouter.get('/getLoads/:page',LoadControllers.getLoads);
loadRouter.get("/getLoadById/:id",LoadControllers.getLoadsById)

export default loadRouter;