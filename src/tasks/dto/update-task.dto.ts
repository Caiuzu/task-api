import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    example: 'Fazer compras',
    description: 'Descrição da tarefa',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: true,
    description: 'Indica se a tarefa foi completada',
    required: false,
  })
  completed?: boolean;
}
