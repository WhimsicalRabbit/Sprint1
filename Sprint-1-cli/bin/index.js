#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const { add, complete, erase, show } = require("./mainForCLI");

if (argv.start) {
    console.log(`
    Welcome to your ToDo list \n
    Please type one of the next numbers to perform its specific action with the flag "option" \n
    1: Add task \n
    2: Complete task \n
    Example of how should the command look: node index.js --option=1
    `)
} else if (argv.option == 1) {
    console.log(`
    Please type node index.js --add="" and write your pending task between the quotes \n
    Example: node index.js --add="Buy rabbit toys"
    `)
} else if (argv.add) {
    add(argv.add)
    console.log("write 'node index.js --start' to go to the menu")
} else if (argv.option == 2) {
    show()
    console.log(`
    Please type node index.js --complete= and put the number of the task you wanna complete \n
    Example: node index.js --complete=1
    `)
} else if(argv.complete || argv.complete == 0) {
    complete(argv.complete)
    console.log("write 'node index.js --start' to go to the menu")
} else if (argv.option == 3) {
    show()
    console.log(`
    Please type node index.js --erase= and put the number of the task you wanna erase \n
    Example: node index.js --erase=1
    `)
} else if (argv.erase) {
    erase(argv.erase || argv.erase == 0)
    console.log("write 'node index.js --start' to go to the menu")
} else if (argv.option == 4) {
    show()
    console.log("write 'node index.js --start' to go to the menu")
} else {
    console.log(`
    That is not a supported command, please write 'node index.js --start' to go to the menu
    `)
}