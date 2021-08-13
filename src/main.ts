import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Set global exception filter
  //app.useGlobalFilters(new AllExceptionsFilter());

  //Global prefix
  app.setGlobalPrefix('api');

  //Enable CORS
  app.enableCors();

  //App port
  const port = process.env.APP_PORT || 3000;
  await app.listen(port);

  //Log app
  Logger.log(`Server started running on ${port}`);
}
bootstrap();
