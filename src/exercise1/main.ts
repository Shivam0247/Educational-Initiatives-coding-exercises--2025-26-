import { runObserverDemo } from "./behavioral/Observer";
import { runStrategyDemo } from "./behavioral/Strategy";
import { runSingletonDemo } from "./creational/Singleton";
import { runFactoryDemo } from "./creational/Factory";
import { runAdapterDemo } from "./structural/Adapter";
import { runDecoratorDemo } from "./structural/Decorator";

console.log("=== Observer Pattern ===");
runObserverDemo();

console.log("\n=== Strategy Pattern ===");
runStrategyDemo();

console.log("\n=== Singleton Pattern ===");
runSingletonDemo();

console.log("\n=== Factory Pattern ===");
runFactoryDemo();

console.log("\n=== Adapter Pattern ===");
runAdapterDemo();

console.log("\n=== Decorator Pattern ===");
runDecoratorDemo();
