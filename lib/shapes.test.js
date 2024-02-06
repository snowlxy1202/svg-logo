const { Circle, Triangle, Square } = require("./shapes");

    describe("Shapes", () => {
        test("create a triangle with yellow text", () => {
            const triangle = new Triangle("aaa", "blue", "red")
            expect(triangle.renderStart()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`)
            expect(triangle.renderEnd()).toBe("</svg>")
            expect(triangle.insertShape()).toBe(`<polygon points="150,50 250,150 50,150" fill="red" />`)
        })
    });
     

      describe("Shapes", () => {
        test("created a square with blue input", () => {
            const square = new Square("aaa", "blue", "red")
            expect(square.renderStart()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`)
            expect(square.renderEnd()).toBe("</svg>")
            expect(square.insertShape()).toBe(`<rect width="100%" height="100%" fill="red" />`)
        })
    });

      describe("Shapes", () => {
        test("created a circle", () => {
            const circle = new Circle("aaa", "blue", "red")
            expect(circle.renderStart()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`)
            expect(circle.renderEnd()).toBe("</svg>")
            expect(circle.insertShape()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`)
        })
    });
