import { writeFile } from "fs/promises";
import { ITask } from "../types/task";
import { getDateTimeNow } from "../lib/date";
import { tasksFilePath } from "../config";
import { loadAllTasks } from "./loadAllTasks";

function getTaskId(tasks: ITask[]): number {
  return tasks.length === 0 ? 1 : tasks.length + 1;
}

export async function addTask(description: string): Promise<void> {
  try {
    const tasks: ITask[] = await loadAllTasks();

    const taskId = getTaskId(tasks);

    const newTask: ITask = {
      id: taskId,
      description,
      status: "todo",
      createdAt: getDateTimeNow(),
      updatedAt: getDateTimeNow(),
    };

    tasks.push(newTask);

    const tasksString = JSON.stringify(tasks, null, 2);

    await writeFile(tasksFilePath, tasksString);

    console.log("File Path: ", tasksFilePath);
    console.log(`Task added successfully (ID: ${taskId})`);
  } catch (err) {
    throw new Error("Error adding task: " + err);
  }
}
