import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Fazer compras', description: 'Descrição da tarefa' })
  description: string;

  @ApiProperty({
    example: false,
    description: 'Indica se a tarefa foi completada',
  })
  completed: boolean;
}
