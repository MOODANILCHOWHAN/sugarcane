import { Router } from 'express';
import lorryController from './controller.js';
const routerLorry = Router();

router.post('/addLorry', lorryController.addingLorry);

export default routerLorry;
