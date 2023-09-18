# Sprint1

First sprint for the coding course

INSTRUCTIONS:

FIRST LEVEL OF THE SPRINT "Check the functionality of the app using tests"

IMPORTANT: the transpilled typescript file is, for convention, inside the dist folder. Also is compulsory to use Jest to run the tests

The app is build over 4 5 functions, Add(), Complete(), Erase(), Show() and Search(). The app also makes use of two different arrays called "ToDo[]" and "Completed[]" where the tasks will be pushed or spliced.

The Search() function will simply search for the specific index of a task in the ToDo[] array

The Add() will push the tasks to the ToDo[] array When meeting with the neccesary conditions, for example, introducing a string. Also showing different messages when the array is empty or it already has at least one index.

The Complete() function will received a number from the user and call the Search() function to receive the index of the task in the ToDo[] array, it will push the task (If it exists) into the Completed[] array and delete it from the ToDo[] array.

The Erase() funtion will delete an index from the ToDo[] array, it will also call the Search() funtion and has its specific requirements, for example, only accepting numbers as its parameter.

The Show() function will show the contents in both ToDo[] and Completed[] array, showing a different message depending on four different conditions; If the any of the two arrays are empty, if both are empty or if both have at least one index.

SECOND LEVEL OF THE SPRINT "Create a CLI to check the functionality of the app"

IMPORTANT: The contents of this level can be found inside the "Sprint1-front-end" folder, to run the CLI it's compulsory to be placed in the bin folder that exists inside while in the terminal.

Once placed in the folfer mentioned above type in the terminal 'node index.js --start'. to use each function type 'node index.js --option=' followed by the number of the specific action desired to perform.

Add = 1
Complete = 2
Erase = 3
Show = 4

Every option will show instrunctions on how to perform the chosed command, when adding a task for the first time a .json file will be created, the same when completing a task. When calling the Show() function will only show the last completed task, re-writing the .json file every time a task is marked as completed to maintain a single index at all times in the Completed[] array.

THIRD LEVEL OF THE SPRINT "Create a front end to check the functionality of your app"

IMPORTANT: The file is located in the folder called "sprint1-front-end".

To open the file click in the HTML file and open it in any browser, There will be 4 buttons, every one will ask through a prompt to ask/complete/delete a task and show an specific message, when clicking the "SHOW" button it will show all the current tasks and the completed ones that you have.
