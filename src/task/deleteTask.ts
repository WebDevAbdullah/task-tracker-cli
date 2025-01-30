import { readFile, writeFile } from "fs/promises";
import { ITask } from "../types/task";
import { tasksFilePath } from "../config";

export async function deleteTask(id: number): Promise<void> {
  try {
    const data: string = await readFile(tasksFilePath, "utf8");

    if (data.trim() === "") {
      console.log("No tasks are available to delete!");
      return;
    }

    const tasks: ITask[] = JSON.parse(data);

    const updatedTasks = tasks.filter((task: ITask) => task.id.toString() !== id.toString());

    // Check if task with ID exists
    if (updatedTasks.length === tasks.length) {
      console.log(`Task with ID ${id} not found!`);
      return;
    }

    // Convert updated tasks back to JSON format
    const tasksString: string = JSON.stringify(tasks);

    writeFile(tasksFilePath, tasksString);
    console.log(`Task has been deleted (ID: ${id})`);
  } catch (err) {
    throw new Error("Error deleting task: " + err);
  }
}
