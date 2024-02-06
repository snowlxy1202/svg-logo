const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
.prompt([
    {
        type: "Input",
        name: "text",
        message: "please ente three characters of your logo"
    },

    {
        type:"Input",
        name:"textColor",
        message:"please enter the color of your logo"
    },

    {
        type:"list",
        name:"shape",
        choices: ['Circle', 'Triangle', 'Square'],
        massage: "please select a shape of your logo"
    },

    {
        type:"Input",
        name:"shapeColor",
        message: "please enter the color of your shape"
    },


])

 .then((answers) => {
        var svgString = ""
        if (answers.shape === "Circle") {
            const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
            svgString = circle.renderStart() + circle.insertShape() + circle.renderText() + circle.renderEnd()
            } else if
            (answers.shape === "Triangle") {
            const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
            svgString = triangle.renderStart() + triangle.insertShape() + triangle.renderText() + triangle.renderEnd()
            } else if
            (answers.shape === "Square") {
            const square = new Square(answers.text, answers.textColor, answers.shapeColor)
            svgString = square.renderStart() + square.insertShape() + square.renderText() + square.renderEnd()
            }

             fs.writeFileSync('logo.svg', svgString)
    });