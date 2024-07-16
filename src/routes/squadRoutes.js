import { Router } from 'express';
import * as squadController from '../controllers/squadController.js';

const router = Router();

router.get('/', squadController.getAllSquads);
router.get('/:id', squadController.getSquadById);
router.post('/', squadController.createSquad);
router.put('/:id', squadController.updateSquad);
router.delete('/:id', squadController.deleteSquad);

export default router;