import { readFile, writeFile } from "fs/promises";
import { ITask } from "../types/task";
import { getDateTimeNow } from "../lib/date";
import { loadAllTasks } from "./loadAllTasks";
import { tasksFilePath } from "../config";

export async function updateTask(id: number, description: string): Promise<void> {
  try {
    const tasks: ITask[] = await loadAllTasks();

    if (tasks.length === 0) {
      console.log("No tasks are available to update!");
      return;
    }

    let taskFound: boolean = false;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id.toString() === id.toString()) {
        tasks[i].description = description;
        tasks[i].updatedAt = getDateTimeNow();
        taskFound = true;
        break;
      }
    }

    if (taskFound === false) {
      console.log(`Task with ID ${id} not found!`);
      return;
    }

    // Convert updated tasks back to JSON format
    const tasksString: string = JSON.stringify(tasks);

    await writeFile(tasksFilePath, tasksString);
    console.log(`Task has been updated (ID: ${id}`);
  } catch (err) {
    console.error("Error updating task:", err);
  }
}
