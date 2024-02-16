/**
 * Daily Task Planner Exercise
 *
 * Welcome to the Daily Task Planner Exercise! In this activity, you'll use JavaScript
 * array methods to manage a list of daily tasks. The goal is to simulate adding,
 * completing, and organizing tasks in a daily planner.
 *
 * The array 'dailyTasks' below represents your initial list of daily tasks
 *
 * Follow the tasks below to update your task list using array methods.
 */

const dailyTasks = ["Check emails", "Attend team meeting", "Write report"];
console.log("Initial tasks:", dailyTasks);

/**
 * Task 0: Prepare for Tomorrow
 * Add a task "Plan next week" to the beginning of your task list for tomorrow.
 *
 * Expected output:
 * After adding a task for tomorrow: ["Plan next week", "Check emails", "Attend team meeting", "Write report"]
 */

// Add new task for tomorrow here
console.log("After adding a task for tomorrow:", dailyTasks);

/**
 * Task 1: Complete the First Task of the Day
 * You complete your first task of the day.
 * Remove it from the list and save it to a variable `completedTask` so we can log it to the console.
 *
 * Expected output:
 * Completed task: Plan next week
 */

let completedTask;
// Remove the first element and save it to completedTask
console.log(`Completed task: ${completedTask}`);


/**
 * Task 2: Check Position of an Urgent Task
 * Writing your report is an urgent task, so you'd like to check it's priority.
 * Find the index of the task "Write report" and save it to 'urgentTaskIndex'
 * to see its current priority in your list.
 *
 * Expected output:
 * Urgent task position: 2
 */

let urgentTaskIndex;
// Save the index of "Write report" to urgentTaskIndex
console.log(`Urgent task position: ${urgentTaskIndex}`);

/**
 * Task 3: Reverse Tasks for Tomorrow
 * At the end of the day, you decide to reverse the tasks to prioritize them differently for tomorrow.
 *
 * Expected output:
 * Tasks reordered for tomorrow: ["Write report", "Attend team meeting", "Check emails"]
 */

// Reverse the order of dailyTasks for tomorrow
console.log("Tasks reordered for tomorrow:", dailyTasks);