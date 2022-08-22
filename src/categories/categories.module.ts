import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports:[

  ]
})
export class CategoriesModule {}
