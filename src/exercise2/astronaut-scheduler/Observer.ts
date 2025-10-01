export interface Observer {
    notify(message: string): void;
}

export class ConsoleObserver implements Observer {
    notify(message: string): void {
        console.log("Notification:", message);
    }
}
