import { Module } from '@nestjs/common';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';
import { PhoneSchema } from './schemas/phone.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Phone', schema: PhoneSchema }])],
  controllers: [PhoneController],
  providers: [PhoneService]
})
export class PhoneModule { }
