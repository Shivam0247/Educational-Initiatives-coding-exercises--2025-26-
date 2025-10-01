interface Observer {
    update(message: string): void;
}

class User implements Observer {
    constructor(private name: string) { }

    update(message: string): void {
        console.log(`[${this.name}] received: ${message}`);
    }
}

class ChatRoom {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(message: string): void {
        for (const obs of this.observers) {
            obs.update(message);
        }
    }
}

// Demo
export function runObserverDemo() {
    const chat = new ChatRoom();
    const alice = new User("Alice");
    const bob = new User("Bob");

    chat.subscribe(alice);
    chat.subscribe(bob);

    chat.notify("Hello, everyone!");
}
