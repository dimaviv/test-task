import { Injectable } from '@nestjs/common';
import {Category} from "./categories.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private typeRepository: typeof Category) {}

    async findAll() {
        const categories = await this.typeRepository.findAll({
            include: [{ model: Category, as: "categories" }],
        });
        return categories;
    }
}
