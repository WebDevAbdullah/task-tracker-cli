import { readFile } from "fs/promises";
import { ITask } from "../types/task";
import { tasksFilePath } from "../config";

export async function listTasksByStatus(status: string): Promise<void> {
  try {
    const data: string = await readFile(tasksFilePath, "utf8");

    if (data.trim() === "") {
      console.log("No tasks to display!");
      return;
    }

    const tasks: ITask[] = JSON.parse(data);

    const updatedTasks: ITask[] = tasks.filter((task: ITask) => task.status === status);
    console.log(`All Tasks with status (${status})`);
    console.log(updatedTasks);
  } catch (err) {
    throw new Error("Failed to read tasks from tasks.json");
  }
}
