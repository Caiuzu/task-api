import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  const config = new DocumentBuilder()
    .setTitle('API de Tarefas')
    .setDescription('A descrição da API de Tarefas')
    .setVersion('1.0')
    .addTag('tasks', 'Operações relacionadas a Tarefas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
