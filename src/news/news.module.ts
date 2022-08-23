import { Module } from '@nestjs/common';
import {CategoriesService} from "../categories/categories.service";
import {CategoriesController} from "../categories/categories.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {News} from "./news.model";
import {NewsService} from "./news.service";
import {NewsController} from "./news.controller";
import {Category} from "../categories/categories.model";

@Module({
    providers: [NewsService],
    controllers: [NewsController],
    imports:[
        SequelizeModule.forFeature([News, Category]),
    ]
})
export class NewsModule {}
