import { Task } from '@interfaces/task.interface';
import { Schema, Types } from 'mongoose';

export interface ITask extends Task {
    _id: Types.ObjectId;
}

export const TaskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            min: 3,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
