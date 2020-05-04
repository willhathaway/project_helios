# project_helios

![helios-day-image](https://github.com/willhathaway/project_helios/blob/master/Screen%20Shot%202020-05-04%20at%209.44.25%20AM.png)

## description:

Helios Day Planner is a React daily planner. It was created with the intention of addressing some of the clunky aspects of Google Calendar or Apple Calendar. Helios aims to replicate the simplicity of a paper agenda. Adding tasks and events should be as simple as typing them in and hitting 'enter'. Extending the length of an agenda item shouldn't involve inputting start/end times in two seperate fields. Extending tasks should involve clicking and dragging the task to physically extend it's presence on the page.

## how to use:

To use the app, sign in using email. The authentication is provided by Auth0, which has a specialized authentication system for React apps. After signing in, the homepage has 24 hour time input fields where tasks, events, and notes can be added. To add a task, type it into the input field and hit 'enter'. The contents of the database are rendered as the value of the input field, so to edit or remove an item, simply make the desired changes and hit 'enter'.

## future improvements

As of this version, the extend task feature doesn't work. It will be added soon, probably using the React Drag-and-drop node package. Another feature that will be added soon is a calendar, where users can click to past or future days to make changes or review. 
I also want to add other input options, such as checklists or notes, to existing tasks.

Questions? Feel free to reach out at <a mailto="william.hathaway38@gmail.com">william.hathaway38@gmail.com</a>

### thanks
