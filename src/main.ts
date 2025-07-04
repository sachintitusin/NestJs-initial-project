import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // validation pipe is essential if you want to 
  // do DTO based validation
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
