import { ToDoService } from "../Services/todo.service";
import express from 'express'
import {Request, Response} from 'express'
class ToDoController {
    todoService = new ToDoService();
    app = express()

    getAllTaskRount = async(req:Request,res:Response)=> {
        const task = await this.todoService.getTask()
        res.json(task)
    }
}