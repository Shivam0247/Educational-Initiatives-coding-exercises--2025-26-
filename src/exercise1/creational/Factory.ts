interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log("Drawing Circle");
    }
}

class Square implements Shape {
    draw(): void {
        console.log("Drawing Square");
    }
}

class ShapeFactory {
    static createShape(type: string): Shape {
        if (type === "circle") return new Circle();
        if (type === "square") return new Square();
        throw new Error("Unknown shape type");
    }
}

// Demo
export function runFactoryDemo() {
    const circle = ShapeFactory.createShape("circle");
    circle.draw();

    const square = ShapeFactory.createShape("square");
    square.draw();
}
