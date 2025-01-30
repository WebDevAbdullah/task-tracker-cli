import { readFile } from "fs/promises";
import { ITask } from "../types/task";
import { tasksFilePath } from "../config";

export async function listAllTasks(): Promise<void> {
  try {
    const data: string = await readFile(tasksFilePath, "utf8");

    if (data.trim() === "") {
      console.log("No tasks to display!");
      return;
    }

    const tasks: ITask[] = JSON.parse(data);
    console.log(tasks);
  } catch (err) {
    throw new Error("Error reading tasks: " + err);
  }
}
