import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneModule } from './phone/phone.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://boburovshukurullo:edwjKVYmMrxlzxzd
@blog-app-cluster.t2nammr.mongodb.net/?retryWrites=true&w=majority&appName=blog-app-cluster`), PhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
