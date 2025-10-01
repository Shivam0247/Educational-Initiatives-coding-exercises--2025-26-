import { Task } from "./Task";

export class TaskFactory {
    static createTask(desc: string, start: string, end: string, priority: string): Task {
        return new Task(desc, start, end, priority);
    }
}

export default TaskFactory;
