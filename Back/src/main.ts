import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://193.168.48.68',
      'https://193.168.48.68',
      'http://tsebulenko-agency.ru',
      'https://tsebulenko-agency.ru',
      'www.tsebulenko-agency.ru',
      'https://www.tsebulenko-agency.ru',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = process.env.PORT || 8080;

  await app.listen(port);
  console.log(`🚀 Сервер запущен на http://localhost:${port}`);
}

bootstrap();
