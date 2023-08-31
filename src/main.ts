import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {


  const logger = new Logger('main:bootstrap');
  const app = await NestFactory.create(AppModule);

  
  //Prefijo del url del enpoints
  app.setGlobalPrefix('api/v1/')

  //Pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,             // Remueve la data que no esta en el DTO.
        forbidNonWhitelisted: true,  // No permite campos que no estan en el DTO
      })
  );


  const config = new DocumentBuilder()
                .setTitle('Api para laboratorio Clinico.')
                .setDescription('Api para aministracion')
                .setVersion('1.0')
                .addTag('clinic')
                // .addBearerAuth()
                .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  logger.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`)
  await app.listen(process.env.PORT);
}
bootstrap();
