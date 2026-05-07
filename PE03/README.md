# Input

The user can give two different inputs in the application. They can enter a task description into the text field and then click the 'Add Task' button to add their task to the list. Also, they can remove an existing task by using the 'Delete' button next to the listed task. In the case of no user input, the list stays empty and the application stays static.

# Process

The application uses useState hook in React to add the new task to the list after confirming that the text field is not empty. The input text field is automatically cleared once the button is clicked. The matching task is eliminated from the list by the app when Delete is clicked. Every update to the list causes triggers React to render the screen again.

# Output

When a task is added or removed, the list of to-do tasks is immediately updated. Every task is shown as a row with a Delete button next to it and a description. The list stays empty if no tasks have been added.