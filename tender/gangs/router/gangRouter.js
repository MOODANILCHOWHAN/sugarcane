import { Router } from 'express';
import gangController from './controller/gangController.js';
const router = Router();

router.post('/addGang', gangController.addingGang);
router.get('/getGang/:id', gangController.getGang);
export default router;
