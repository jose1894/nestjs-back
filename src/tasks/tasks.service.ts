import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface User {
  name: string;
  age: number;
}

export interface Task {
  id: number,
  title: string;
}

@Injectable()
export class TasksService {

  private tasks: CreateTaskDto [] = [];
  
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      // throw new Error(`La tarea con ID ${id} no existe.`);
      return new NotFoundException("La tarea con ID ${id} no existe.");
    }
    return task;

  }

  createTask(task: CreateTaskDto) {

    const newTask = {
      ...task,
      id: this.tasks.length + 1
    };

    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(){
    return 'Update task';
  }

  deleteTask(){
    return 'Delete task';
  }

  updateTaskStatus(){
    return 'Update task status';
  }
}