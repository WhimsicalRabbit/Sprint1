"use strict";
const ToDo = [];
const Completed = [];
const search = (element) => {
    let pos = 0;
    if (isNaN(element)) {
        pos = NaN;
    }
    else {
        if (ToDo.length >= element) {
            pos = element - 1;
        }
        else {
            pos = -1;
        }
    }
    return pos;
};
function add(element) {
    let message = "";
    if (!isNaN(Number(element))) {
        message = "It has to be a string";
    }
    else {
        if (ToDo.length === 0) {
            ToDo.push(element);
            message = "Your first task has been added: " + element;
        }
        else {
            ToDo.push(element);
            message = `The task nº${ToDo.length}: ${element} has been added`;
        }
    }
    return message;
}
function complete(element) {
    let pos = search(element);
    let message = "";
    if (isNaN(pos) && ToDo.length > 0) {
        message = "It has to be a number";
    }
    else {
        if (pos >= 0) {
            Completed.push(ToDo[pos]);
            message = `The task nº${element}: ${ToDo[pos]}. Ha sido completada`;
            ToDo.splice(pos, 1);
        }
        else if (pos < 0 && ToDo.length == 0) {
            message = `You do not have any tasks yet`;
        }
        else {
            message = `This task does not exist`;
        }
    }
    return message;
}
function erase(element) {
    let pos = search(element);
    let message = "";
    if (isNaN(pos)) {
        message = `It has to be a number`;
    }
    else {
        if (pos >= 0) {
            message = `The task nº${element}: ${ToDo[pos]}. Has been eliminated`;
            ToDo.splice(pos, 1);
        }
        else if (pos < 0 && ToDo.length == 0) {
            message = `You do not have any tasks yet`;
        }
        else {
            message = `This task does not exist`;
        }
    }
    return message;
}
function show() {
    let message = "";
    let tasks = "";
    let completeTasks = "";
    if (ToDo.length > 0 && Completed.length > 0) {
        tasks = "\n Your tasks are: \n";
        completeTasks = "\n And your completed tasks are: \n";
        for (let i = 0; i < ToDo.length; i++) {
            tasks += i + 1 + "º. " + ToDo[i] + " \n";
        }
        for (let i = 0; i < Completed.length; i++) {
            completeTasks += i + 1 + "º. " + Completed[i] + " \n";
        }
        message = tasks + completeTasks;
    }
    else if (ToDo.length == 0 && Completed.length > 0) {
        completeTasks = "\n You have completed all your tasks: \n";
        for (let i = 0; i < Completed.length; i++) {
            completeTasks += i + 1 + "º. " + Completed[i] + " \n";
        }
        message = completeTasks;
    }
    else if (Completed.length == 0 && ToDo.length > 0) {
        tasks = "\n Your tasks are: \n";
        completeTasks = "\n You haven't completed any tasks yet";
        for (let i = 0; i < ToDo.length; i++) {
            tasks += i + 1 + "º. " + ToDo[i] + " \n";
        }
        message = tasks + completeTasks;
    }
    else {
        message = "There are no impending tasks nor completed tasks to show";
    }
    return message;
}
module.exports = { add, complete, erase, search, show, ToDo, Completed };
