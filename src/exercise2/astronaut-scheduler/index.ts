import { TaskFactory } from "./TaskFactory";
import { ScheduleManager } from "./ScheduleManager";
import { ConsoleObserver } from "./Observer";

const manager = ScheduleManager.getInstance();
manager.addObserver(new ConsoleObserver());

const t1 = TaskFactory.createTask("Morning Exercise", "07:00", "08:00", "High");
manager.addTask(t1);

const t2 = TaskFactory.createTask("Team Meeting", "09:00", "10:00", "Medium");
manager.addTask(t2);

manager.viewTasks();

const conflict = TaskFactory.createTask("Training", "09:30", "10:30", "High");
manager.addTask(conflict);

manager.removeTask("Morning Exercise");
manager.viewTasks();
