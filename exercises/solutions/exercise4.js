/**
 * Exercise 4: Customize a Guest List
 * You're in charge of managing a guest list for an upcoming party.
 * The initial guest list is contained in the array `guestList`,
 * but the host has some extra tasks for you to complete.
 *
 * Use the array methods: slice() and splice() to complete the tasks below.
 * Learn about them here before attempting the exercise:
 * slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

const guestList = ["Alice", "Bob", "Charlie", "Dana", "Eli", "Frank"];

/**
 * Task 1: Create a VIP guest list
 * Use slice() to create a VIP Guest List containing the first 3 guests
 * in guestList, and save it in the variable vipGuestList
 *
 * Expected Output:
 * VIP Guest List: ["Alice", "Bob", "Charlie"]
 */

let vipGuestList;
vipGuestList = guestList.slice(0, 3);
console.log("VIP Guest List: ", vipGuestList);

/**
 * Task 2: Replace a Guest
 * One of the guests, Dana, can no longer attend.
 * You need to replace Dana with a new guest: Grace.
 * Use splice() to replace "Dana" with "Grace" in guestList.
 *
 * Expected Output:
 * Updated Guest List: ["Alice", "Bob", "Charlie", "Grace", "Eli", "Frank"]
 */

guestList.splice(3, 1, "Grace");
console.log("Updated Guest List: ", guestList)