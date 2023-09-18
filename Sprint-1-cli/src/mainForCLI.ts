import { fsyncSync, readFileSync } from "fs";

const fs = require("fs");

function add(element: string) {

    let message = "";


    if (!isNaN(Number(element))) {
        message = "It has to be an string"
    } else {

        let toDo: Array<string> = [];

        try {
            toDo = JSON.parse(fs.readFileSync("toDoList.json"))
        } catch {
            //If it does not exist it will be created below
        }

        if (toDo.length == 0) {
            
            toDo.push(element);

            let toDoJSON = JSON.stringify(toDo);

            fs.writeFile("toDoList.json", toDoJSON, (err: any) => {
                if (err) throw err;
            })

            message = `The task nº1: "${element}" has been added to the toDo list`
        } else {
            toDo.push(element)

            let toDoJSON = JSON.stringify(toDo, null, 2);

            fs.writeFile("toDoList.json", toDoJSON, (err: any) => {
                if (err) throw err
            });

            message = `The task nº${toDo.length}: "${element}" has been added to the toDo list`
        }
    }
    return console.log(message);
}

function complete(element: number) {

    let message: string | Array<string> = "";
    if (isNaN(element)) {
        message = "It has to be a number"
    } else {

        let toDo: Array<string> = [];
        let completed: Array<string> = [];
        let empty: boolean = false;
        let pos = element-1;

        try {
            toDo = Object.values(JSON.parse(fs.readFileSync("toDoList.json"))
)        } catch {
            empty = true
        }

        if (empty == true  || toDo.length == 0) {

            message = "There are no tasks to be completed"

        } else if (toDo.length > pos){
            
            message = `The task nº${element}: ${toDo[pos]}. Has been completed`;

            completed.push(toDo[pos])
            toDo.splice(pos, 1)

            let completedJSON = JSON.stringify(completed)
            let toDoJSON = JSON.stringify(toDo)


            fs.writeFile("toDoList.json", toDoJSON, (err: any) => {
                if (err) throw err
            });

            fs.writeFile("completed.json", completedJSON, (err: any) => {
                if (err) throw err
            });

        } else {
            message = 'This task does not exist'
        }

    }

    return console.log(message)
}

function erase(element: number) {
    
    let message = '';

    if (isNaN(element)) {
        message = "It has to be a number"
    } else {

        let toDo: Array<string> = [];
        let empty: boolean = false;
        let pos = element - 1;

        try {
            toDo = JSON.parse(fs.readFileSync("toDoList.json"))
        } catch {
            empty = true
        }

        if (empty == true || toDo.length == 0) {

            message = "There are no tasks to be completed"

        } else if (toDo.length > pos){

            message = `The task nº${element}: ${toDo[pos]}. Has been erased`;

            toDo.splice(pos, 1)

            let toDoJSON = JSON.stringify(toDo);

            fs.writeFile("toDoList.json", toDoJSON, (err: any) => {
                if (err) throw err
            })
        } else {
            message = "This task does not exist"
        }
    }

    return console.log(message);
}

function show() {

    let message: string = "";
    let tasks: boolean = false;
    let completeTasks: boolean = false;
    let toDo: Array<string> = [];
    let completed: Array<number> = [];

    try {
        toDo = JSON.parse(fs.readFileSync("toDoList.json"))
    } catch {
        tasks = true
    }

    try {
        completed = JSON.parse(fs.readFileSync("completed.json"))
    } catch {
        completeTasks = true
    }

    if (tasks == true && completeTasks == true || toDo.length == 0 && completed.length == 0) {
        message = "There is nothing to see here"
    } else if (!tasks && completeTasks == true || toDo.length > 0 && completed.length == 0) {

        message = "\n Your completed tasks are: \n";

        for (let i = 0; i < toDo.length; i++) {
            message += i + 1 + "º. " + toDo[i] + " \n";
          } 

    } else if (tasks == true && !completeTasks || toDo.length == 0 && completed.length > 0) {

        message = `
        \n You have no tasks to complete, your last completed task is: \n
        ${completed[0]}
        `
    } else { 
        message = "\n Your completed tasks are: \n";

        for (let i = 0; i < toDo.length; i++) {
            message += i + 1 + "º. " + toDo[i] + " \n";
          } 
        
        message += "\n And your last completed task is: \n";
        message += completed[0]
    }

    return console.log(message)
}

module.exports =  { add, complete, erase, show };