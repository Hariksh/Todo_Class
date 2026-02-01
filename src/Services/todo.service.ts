import { TodoModel, ToDoInterface } from "../Schema/todo.schema"

export class ToDoService{
    async getTask(){
        return await TodoModel.find();
    }

    async getTaskById(id: string) {
        return await TodoModel.findById(id);
    }

    async createTask(data: Partial<ToDoInterface>) {
        return await TodoModel.create(data);
    }

    async updateTask(id: string, data: Partial<ToDoInterface>) {
        return await TodoModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteTask(id: string) {
        return await TodoModel.findByIdAndDelete(id);
    }
}