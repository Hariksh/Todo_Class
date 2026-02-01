import { Schema, Document, model } from "mongoose"

export interface ToDoInterface extends Document {
    title: String;
    description: String;
    isCompleted: Boolean;
}

const ToDoSchema = new Schema<ToDoInterface>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
})

export const TodoModel = model("task", ToDoSchema);