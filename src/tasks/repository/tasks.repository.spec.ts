import { Test, TestingModule } from '@nestjs/testing';
import { TasksRepository } from './tasks.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from '../entities/task.entity';

describe('TaskRepository', () => {
  let repository: TasksRepository;
  let mockModel: any;

  beforeEach(async () => {
    mockModel = {
      find: jest.fn(),
      findById: jest.fn(),
      findByIdAndUpdate: jest.fn(),
      findByIdAndDelete: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksRepository,
        {
          provide: getModelToken(Task.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    repository = module.get<TasksRepository>(TasksRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  // Aqui você pode adicionar testes específicos para cada método do repositório,
  // por exemplo, testando se o método create chama o save do modelo com os dados corretos.
});
