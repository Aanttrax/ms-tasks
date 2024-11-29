import { Router } from 'express';
import TaskController from '@controllers/task.controller';

const router: Router = Router();

router.post('/task', TaskController.createTask);
router.get('/task', TaskController.getTasks);
router.get('/task/:taskId', TaskController.getTaskById);
router.put('/task/:taskId', TaskController.updateTask);
router.delete('/task/:taskId', TaskController.deleteTask);

export default router;
