import { readFile } from "fs/promises";
import { ITask } from "../types/task";
import { tasksFilePath } from "../config";

export async function loadAllTasks(): Promise<ITask[]> {
  try {
    const data: string = await readFile(tasksFilePath, "utf8");

    if (data.length === 0) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading expenses:", err);
    return [];
  }
}
