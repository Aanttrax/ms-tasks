import { Router } from 'express';
import TaskController from '@controllers/task.controller';
import { ValidateToken } from '@middleware/validateToken.middleware';

const router: Router = Router();

router.post('/task', ValidateToken, TaskController.createTask);
router.get('/task', ValidateToken, TaskController.getTasks);
router.get('/task/:taskId', TaskController.getTaskById);
router.put('/task/:taskId', TaskController.updateTask);
router.delete('/task/:taskId', TaskController.deleteTask);

export default router;
