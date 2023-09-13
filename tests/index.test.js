const { add, complete, erase, search, show, ToDo, Completed } = require("../dist/index")

/**
 * Test for the add() function
 */

test("It should tell when recieve something that is not a string", () => {
    expect(add(0)).toBe("It has to be a string");
})

test("It should tell when the first task is added", () => {

    let element = "Buy a rabbit";

    expect(add(element)).toBe("Your first task has been added: " + element)
})

test ("It should display the correct number in the list", () => {
    
    let element = "Buy rabbit food";

    expect(add(element)).toBe(`The task nº2: ${element} has been added`)
})

/**
 * Test for the search() function
 */

test("It should tell when receiving something else than a number", () => {
    expect(search("Buy a rabbit")).toBe(NaN)
})

test("It should return the specific index of an existing element inside the ToDo array", () => {
    expect(search(1)).toBe(0)
})

test("It should return error when there is not existing task", () => {
    expect(search(3)).toBe(-1)
})

/**
 * Test for the complete() function
 */

test("It should display the error message when giving something that is not a number", () => {
    expect(complete("Buy a rabbit")).toBe("It has to be a number")
})

test("It should display the correct message when completing a task", () => {
    expect(complete(1)).toBe(`The task nº1: Buy a rabbit. Ha sido completada`)
}) 

test("It should tell when a task does not exist", () => {
    expect(complete(2)).toBe(`This task does not exist`)
})
 
test("It should tell when the ToDo array is empty", () => {

    complete(1)

    expect(complete(1)).toBe(`You do not have any tasks yet`);
})

/**
 * Test for the erase() function
 */

test("It should tell when receiving something that is not a number", () => {
    expect(erase("Research about rabbit care")).toBe(`It has to be a number`)
})

test("It should tell when succesfully deleting an impending task", () => {
    
    let element = "Research about rabbit care";

    add(element);

    expect(erase(1)).toBe(`The task nº1: ${element}. Has been eliminated`);
})

test("It should tell when trying to delete with an empty list", () => {
    
    expect(erase(1)).toBe(`You do not have any tasks yet`);
})

test("It should tell when trying to delete a task that does not exists", () => {
    
    let element = "Buy wire protectors";

    add(element);

    expect(erase(2)).toBe(`This task does not exist`);
})

/**
 * Tests for the show function
 */

test("It should show the current tasks in the ToDo list and the completed ones in a legible format", () => {

    let element = "Buy a very spacious cage";

    add(element);

    expect(show()).toBe("\n Your tasks are: \n" + "1º. Buy wire protectors \n" + "2º. Buy a very spacious cage \n" + "\n And your completed tasks are: \n" + "1º. Buy a rabbit \n" + "2º. Buy rabbit food \n")
})

test("It should show only show the completed tasks when there is no tasks in the ToDo list", () => {
    
    erase(1);
    erase(1);

    expect(show()).toBe("\n You have completed all your tasks: \n" + "1º. Buy a rabbit \n" + "2º. Buy rabbit food \n")
})

test("It should show a message when there is no completed tasks", () => {
    
    Completed.length = 0;
    add("Buy another rabbit");

    expect(show()).toBe("\n Your tasks are: \n" + "1º. Buy another rabbit \n" + "\n You haven't completed any tasks yet")
}) 

test("If both lists are empty it should display an specific message", () => {
    
    erase(1)

    expect(show()).toBe("There are no impending tasks nor completed tasks to show")
})