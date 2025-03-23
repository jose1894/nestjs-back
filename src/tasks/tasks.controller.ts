import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller({'path': '/tasks'})
export class TaskController{
  tasksService: TasksService;
  constructor(taskService: TasksService){
    this.tasksService = taskService
  }
  
  @ApiTags('tasks')
  @ApiOperation({'summary': 'Get all tasks'})
  @ApiResponse({'status': 200, 'description': 'Return all tasks'})
  @ApiResponse({'status': 403, 'description': 'Forbidden'})
  @Get()
  getAllTasks(@Query() query: any): Task[]{
    console.log(query);
    return this.tasksService.getTasks();
  }
 
  @Get('/:id')
  getTask(@Param('id') id:string){
    return this.tasksService.getTask(parseInt(id,10));
  }

  @Post()
  @ApiOperation({'summary' : 'Create a new task'})
  createTask(@Body() task: CreateTaskDto){
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: UpdateTaskDto){
    return this.tasksService.updateTask();
  }

  @Patch(':id')
  patchTask(){
    // return this.tasksService.createTask();    
  }
  
  @Delete(':id')
  deleteTask(){
    return this.tasksService.deleteTask();
  }
}