import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors("*");
  
  const port = process.env.PORT || 8080;
  
  await app.listen(port);
  console.log(`🚀 Сервер запущен на http://localhost:${port}`);
  console.log(`✅ CORS включён для localhost:3000 и localhost:3001`);
}

bootstrap();

