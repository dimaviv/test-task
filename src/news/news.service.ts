import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {News} from "./news.model";
import {Category} from "../categories/categories.model";

@Injectable()
export class NewsService {
    constructor(@InjectModel(News) private newsRepository: typeof News) {}

    async findByCategory(value: string) {
        console.log(value)
        value = value.charAt(0).toUpperCase() + value.slice(1);
        const news = await this.newsRepository.findAll({include: { model: Category, where: {name: value}}})
        return news;
    }
}
