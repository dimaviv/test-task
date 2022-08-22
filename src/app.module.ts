import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CategoriesModule } from './categories/categories.module';
import {ConfigModule} from "@nestjs/config";
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true
        }),
        CategoriesModule,
        NewsModule,
    ],
    controllers: [NewsController],
    providers: [NewsService],
})
export class AppModule {
}
