import mongoose from 'mongoose';
import { TaskSchema, ITask } from '@database/schemas/task.schema';
import { Task } from '@interfaces/task.interface';

const TaskModel = mongoose.model('Task', TaskSchema, 'tasks');

const createTask = async (task: Task): Promise<void> => {
    try {
        await TaskModel.create(task);
        return;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
        }
        throw e;
    }
};

const getTasks = async (): Promise<ITask[]> => {
    try {
        const tasks: ITask[] = await TaskModel.find({}).lean();
        return tasks;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
        }
        throw e;
    }
};

const getTaskById = async (taskId: string): Promise<ITask> => {
    try {
        const task: ITask | null = await TaskModel.findById(taskId).lean();
        if (!task) throw 'Task not Found';
        return task;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
        }
        throw e;
    }
};

const updateTask = async (taskId: string, task: Task): Promise<void> => {
    try {
        await TaskModel.findByIdAndUpdate(taskId, task);
        return;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
        }
        throw e;
    }
};

const deleteTask = async (taskId: string): Promise<void> => {
    try {
        await TaskModel.findByIdAndDelete(taskId);
        return;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', e.message);
        } else {
            console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', e);
        }
        throw e;
    }
};

export default {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
