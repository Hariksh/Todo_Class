import { ToDoService } from "../Services/todo.service";
import express from 'express'
import {Request, Response} from 'express'
export default class ToDoController {
    todoService = new ToDoService();
    app = express()


    getAllTasks = async (req: Request, res: Response) => {
        try {
            const task = await this.todoService.getTask();
            res.json(task);
        } catch (error) {
            res.status(500).json({ message: "Error fetching tasks", error });
        }
    }

    getTaskById = async (req: Request, res: Response) => {
        try {
            const task = await this.todoService.getTaskById(req.params.id as string);
            if (!task) {
                res.status(404).json({ message: "Task not found" });
                return;
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ message: "Error fetching task", error });
        }
    }

    createTask = async (req: Request, res: Response) => {
        try {
            const task = await this.todoService.createTask(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ message: "Error creating task", error });
        }
    }

    updateTask = async (req: Request, res: Response) => {
        try {
            const task = await this.todoService.updateTask(req.params.id as string, req.body);
            if (!task) {
                res.status(404).json({ message: "Task not found" });
                return;
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ message: "Error updating task", error });
        }
    }

    deleteTask = async (req: Request, res: Response) => {
        try {
            const task = await this.todoService.deleteTask(req.params.id as string);
            if (!task) {
                res.status(404).json({ message: "Task not found" });
                return;
            }
            res.json({ message: "Task deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting task", error });
        }
    }
}