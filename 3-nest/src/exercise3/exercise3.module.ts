import { Module } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';
import { Exercise3Controller } from './exercise3.controller';

@Module({
  providers: [Exercise3Service],
  controllers: [Exercise3Controller]
})
export class Exercise3Module {}
