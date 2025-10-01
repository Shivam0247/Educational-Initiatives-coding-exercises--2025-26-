import { Task } from "./Task";
import { Observer } from "./Observer";

export class ScheduleManager {
    private static instance: ScheduleManager;
    private tasks: Task[] = [];
    private observers: Observer[] = [];

    private constructor() { }

    static getInstance(): ScheduleManager {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }

    addObserver(obs: Observer) {
        this.observers.push(obs);
    }

    private notify(message: string) {
        for (const obs of this.observers) {
            obs.notify(message);
        }
    }

    addTask(task: Task): void {
        if (this.hasConflict(task)) {
            this.notify(`Error: Task conflicts with existing schedule.`);
            return;
        }
        this.tasks.push(task);
        this.notify(`Task added successfully: ${task.description}`);
    }

    removeTask(desc: string): void {
        const index = this.tasks.findIndex(t => t.description === desc);
        if (index === -1) {
            this.notify("Error: Task not found.");
            return;
        }
        this.tasks.splice(index, 1);
        this.notify(`Task removed: ${desc}`);
    }

    viewTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks scheduled.");
            return;
        }
        const sorted = [...this.tasks].sort((a, b) => a.startTime.localeCompare(b.startTime));
        sorted.forEach(t => console.log(`${t.startTime}-${t.endTime}: ${t.description} [${t.priority}]`));
    }

    private hasConflict(newTask: Task): boolean {
        return this.tasks.some(t => !(t.endTime <= newTask.startTime || t.startTime >= newTask.endTime));
    }
}
