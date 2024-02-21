import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GenericExceptionsFilter } from '../common/generic-exceptions/generic-exceptions.filter';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
@UseFilters(GenericExceptionsFilter)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova tarefa' })
  @ApiResponse({
    status: 201,
    description: 'Tarefa criada',
    type: CreateTaskDto,
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as tarefas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada',
    type: [CreateTaskDto],
  })
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma tarefa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da tarefa' })
  @ApiResponse({
    status: 200,
    description: 'Tarefa encontrada',
    type: CreateTaskDto,
  })
  async findOne(@Param('id') id: string) {
    return await this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma tarefa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da tarefa a ser atualizada' })
  @ApiResponse({
    status: 200,
    description: 'Tarefa atualizada',
    type: UpdateTaskDto,
  })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma tarefa pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da tarefa a ser removida' })
  @ApiResponse({ status: 200, description: 'Tarefa removida' })
  async remove(@Param('id') id: string) {
    return await this.tasksService.remove(id);
  }
}
