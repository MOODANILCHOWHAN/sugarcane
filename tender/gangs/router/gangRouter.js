import { Router } from 'express';
import gangController from './controller/gangController.js';
const routerGang = Router();

router.post('/addGang', gangController.addingGang);
router.get('/getGang/:id', gangController.getGang);
export default routerGang;
