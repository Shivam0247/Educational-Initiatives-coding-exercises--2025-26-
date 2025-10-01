interface Writer {
    write(data: string): void;
}

class FileWriter implements Writer {
    write(data: string): void {
        console.log(`Writing to file: ${data}`);
    }
}

class LoggingDecorator implements Writer {
    constructor(private wrappee: Writer) { }

    write(data: string): void {
        console.log("Logging before write...");
        this.wrappee.write(data);
    }
}

class EncryptionDecorator implements Writer {
    constructor(private wrappee: Writer) { }

    write(data: string): void {
        const encrypted = Buffer.from(data).toString("base64");
        this.wrappee.write(encrypted);
    }
}


export function runDecoratorDemo() {
    const writer: Writer = new LoggingDecorator(
        new EncryptionDecorator(new FileWriter())
    );
    writer.write("Sensitive data");
}
