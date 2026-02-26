import { Router } from 'express';
import gangController from '../controller/gangController.js';
const routerGang = Router();

routerGang.post('/addGang', gangController.addingGang);
routerGang.get('/getGang/:id', gangController.getGang);
export default routerGang;
