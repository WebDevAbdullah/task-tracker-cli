import process from "process";
import { listAllTasks } from "./task/listAllTasks";
import { listTasksByStatus } from "./task/listTasksByStatus";
import { addTask } from "./task/addTask";
import { updateTask } from "./task/updateTask";
import { deleteTask } from "./task/deleteTask";
import { updateTaskStatus } from "./task/updateTaskStatus";

async function main() {
  const command = process.argv[2];
  const arg1 = process.argv[3];
  const arg2 = process.argv[4];

  switch (command) {
    case "list":
      if (arg1 === "todo" || arg1 === "in-progress" || arg1 === "done") {
        await listTasksByStatus(arg1);
      } else {
        await listAllTasks();
      }
      break;
    case "add":
      if (arg1) {
        await addTask(arg1);
      } else {
        console.log("Please provide a task description.");
      }
      break;
    case "update":
      if (arg1 && arg2) {
        await updateTask(parseInt(arg1), arg2);
      } else {
        console.log("Please provide a task ID and description.");
      }
      break;
    case "delete":
      if (arg1) {
        await deleteTask(parseInt(arg1));
      } else {
        console.log("Please provide a task ID.");
      }
      break;
    case "mark-in-progress":
      if (arg1) {
        await updateTaskStatus(parseInt(arg1), "in-progress");
      } else {
        console.log("Please provide a task ID.");
      }
      break;
    case "mark-done":
      if (arg1) {
        await updateTaskStatus(parseInt(arg1), "done");
      } else {
        console.log("Please provide a task ID.");
      }
      break;
    default:
      console.log("Invalid command");
      break;
  }
}

main();
