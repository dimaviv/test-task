import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
} from "sequelize-typescript";
import { Category } from "../categories/categories.model";


interface TypeCreationAttrs {
    title: string;
    description: number;
    categoryId: number;
}

@Table({tableName: 'news'})
export class News extends Model<News, TypeCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @Column({type: DataType.DATE, allowNull: false})
    date: string;

    @Column({type: DataType.INTEGER, defaultValue:0 ,allowNull: false})
    likes : string;

    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER, allowNull: true})
    categoryId: number;

    // @HasOne(() => Category)
    // category: Category;

    @BelongsTo(() => Category)
    category: Category;
}