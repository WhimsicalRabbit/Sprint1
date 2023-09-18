"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function add(element) {
    let message = "";
    if (!isNaN(Number(element))) {
        message = "It has to be an string";
    }
    else {
        let toDo = [];
        try {
            toDo = JSON.parse(fs.readFileSync("toDoList.json"));
        }
        catch (_a) {
        }
        if (toDo.length == 0) {
            toDo.push(element);
            let toDoJSON = JSON.stringify(toDo);
            fs.writeFile("toDoList.json", toDoJSON, (err) => {
                if (err)
                    throw err;
            });
            message = `The task nº1: "${element}" has been added to the toDo list`;
        }
        else {
            toDo.push(element);
            let toDoJSON = JSON.stringify(toDo, null, 2);
            fs.writeFile("toDoList.json", toDoJSON, (err) => {
                if (err)
                    throw err;
            });
            message = `The task nº${toDo.length}: "${element}" has been added to the toDo list`;
        }
    }
    return console.log(message);
}
function complete(element) {
    let message = "";
    if (isNaN(element)) {
        message = "It has to be a number";
    }
    else {
        let toDo = [];
        let completed = [];
        let empty = false;
        let pos = element - 1;
        try {
            toDo = Object.values(JSON.parse(fs.readFileSync("toDoList.json")));
        }
        catch (_a) {
            empty = true;
        }
        if (empty == true || toDo.length == 0) {
            message = "There are no tasks to be completed";
        }
        else if (toDo.length > pos) {
            message = `The task nº${element}: ${toDo[pos]}. Has been completed`;
            completed.push(toDo[pos]);
            toDo.splice(pos, 1);
            let completedJSON = JSON.stringify(completed);
            let toDoJSON = JSON.stringify(toDo);
            fs.writeFile("toDoList.json", toDoJSON, (err) => {
                if (err)
                    throw err;
            });
            fs.writeFile("completed.json", completedJSON, (err) => {
                if (err)
                    throw err;
            });
        }
        else {
            message = 'This task does not exist';
        }
    }
    return console.log(message);
}
function erase(element) {
    let message = '';
    if (isNaN(element)) {
        message = "It has to be a number";
    }
    else {
        let toDo = [];
        let empty = false;
        let pos = element - 1;
        try {
            toDo = JSON.parse(fs.readFileSync("toDoList.json"));
        }
        catch (_a) {
            empty = true;
        }
        if (empty == true || toDo.length == 0) {
            message = "There are no tasks to be completed";
        }
        else if (toDo.length > pos) {
            message = `The task nº${element}: ${toDo[pos]}. Has been erased`;
            toDo.splice(pos, 1);
            let toDoJSON = JSON.stringify(toDo);
            fs.writeFile("toDoList.json", toDoJSON, (err) => {
                if (err)
                    throw err;
            });
        }
        else {
            message = "This task does not exist";
        }
    }
    return console.log(message);
}
function show() {
    let message = "";
    let tasks = false;
    let completeTasks = false;
    let toDo = [];
    let completed = [];
    try {
        toDo = JSON.parse(fs.readFileSync("toDoList.json"));
    }
    catch (_a) {
        tasks = true;
    }
    try {
        completed = JSON.parse(fs.readFileSync("completed.json"));
    }
    catch (_b) {
        completeTasks = true;
    }
    if (tasks == true && completeTasks == true || toDo.length == 0 && completed.length == 0) {
        message = "There is nothing to see here";
    }
    else if (!tasks && completeTasks == true || toDo.length > 0 && completed.length == 0) {
        message = "\n Your completed tasks are: \n";
        for (let i = 0; i < toDo.length; i++) {
            message += i + 1 + "º. " + toDo[i] + " \n";
        }
    }
    else if (tasks == true && !completeTasks || toDo.length == 0 && completed.length > 0) {
        message = `
        \n You have no tasks to complete, your last completed task is: \n
        ${completed[0]}
        `;
    }
    else {
        message = "\n Your completed tasks are: \n";
        for (let i = 0; i < toDo.length; i++) {
            message += i + 1 + "º. " + toDo[i] + " \n";
        }
        message += "\n And your last completed task is: \n";
        message += completed[0];
    }
    return console.log(message);
}
module.exports = { add, complete, erase, show };
