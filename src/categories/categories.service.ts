import { Injectable } from '@nestjs/common';
import {Category} from "./categories.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

    async findAll() {
        const categories = await this.categoryRepository.findAll();
        return categories;
    }
}
