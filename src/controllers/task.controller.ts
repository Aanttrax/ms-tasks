import { Request, Response, NextFunction } from 'express';
import { Task } from '@interfaces/task.interface';
import TaskDb from '@database/task.database';

export default class TaskController {
    static async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const taskData: Task = req.body;
            await TaskDb.createTask(taskData);
            res.status(201).json({ success: true, response: 'Task created' });
        } catch (e: unknown) {
            next(e);
        }
    }
    static async getTasks(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const tasks: Task[] = await TaskDb.getTasks();
            res.status(200).json({ success: true, response: tasks });
        } catch (e: unknown) {
            next(e);
        }
    }
    static async getTaskById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { taskId } = req.params;
            const task: Task = await TaskDb.getTaskById(taskId);
            res.status(200).json({ success: true, response: task });
        } catch (e: unknown) {
            next(e);
        }
    }
    static async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { taskId } = req.params;
            const taskData: Task = req.body;
            await TaskDb.updateTask(taskId, taskData);
            res.status(200).json({ success: true, response: 'Task Updated' });
        } catch (e: unknown) {
            next(e);
        }
    }
    static async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { taskId } = req.params;
            await TaskDb.deleteTask(taskId);
            res.status(200).json({ success: true, response: 'Task Deleted' });
        } catch (e: unknown) {
            next(e);
        }
    }
}
