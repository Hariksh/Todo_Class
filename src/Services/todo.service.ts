import { TodoModel,ToDoInterface } from "../Schema/todo.schema"

export class ToDoService{
    async getTask(){
        return await TodoModel.find()
    }
    createTask(){}
    updateTask(){}
    deleteTask(){}
}