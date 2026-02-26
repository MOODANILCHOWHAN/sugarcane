import { Router } from 'express';
import gangDetailsController from './gangDetailsController.js';
const routerGangDetails = Router();

routerGangDetails.post('addMember', gangDetailsController.addMembers);

export default routerGangDetails;
