/**
 * Daily Task Planner Exercise
 *
 * In this exercise, you'll use JavaScript array methods to manage a list of daily tasks.
 *
 * The array 'dailyTasks' below represents your initial list of daily tasks
 *
 * Follow the tasks below to update your task list using array methods.
 */

const dailyTasks = ["Check emails", "Attend team meeting", "Write report"];

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
 * You complete your first task of the day. Remove it from the list.
 *
 * Expected output:
 * After completing first task: ["Check emails", "Attend team meeting", "Write report"]
 */

// Remove the first element
console.log("After completing first task:", dailyTasks);


/**
 * Task 2: Check Position of an Urgent Task
 * Writing your report is an urgent task, so you'd like to check it's priority.
 * Find the index of the task "Write report" and save it to 'urgentTaskIndex'
 * to see its current priority in your list.
 *
 * Expected output:
 * Urgent task position: 2
 */

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