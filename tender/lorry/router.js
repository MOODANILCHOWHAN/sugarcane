import { Router } from 'express';
import lorryController from './controller.js';
const router = Router();

router.post('/addLorry', lorryController.addingLorry);

export default router;
