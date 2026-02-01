import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import ToDoController from '../controllers/todo.controller';

export class TodoRoute implements Routes {
    public path = '/todo';
    public router = Router();
    public todoController = new ToDoController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.todoController.getAllTasks);
        this.router.get(`${this.path}/:id`, this.todoController.getTaskById);
        this.router.post(`${this.path}`, this.todoController.createTask);
        this.router.put(`${this.path}/:id`, this.todoController.updateTask);
        this.router.delete(`${this.path}/:id`, this.todoController.deleteTask);
    }
}
