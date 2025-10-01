class ConfigManager {
    private static instance: ConfigManager;
    private settings: Map<string, string> = new Map();

    private constructor() { }

    static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    set(key: string, value: string): void {
        this.settings.set(key, value);
    }

    get(key: string): string | undefined {
        return this.settings.get(key);
    }
}

// Demo
export function runSingletonDemo() {
    const config1 = ConfigManager.getInstance();
    config1.set("appName", "HC Exercises");

    const config2 = ConfigManager.getInstance();
    console.log(config2.get("appName")); // same instance
}
