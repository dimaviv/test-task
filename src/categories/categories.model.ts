import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {News} from "../news/news.model";

interface TypeCreationAttrs {
    name: string;

}

@Table({tableName: 'categories'})
export class Category extends Model<Category, TypeCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    // @ForeignKey(() => Category)
    // @Column({type: DataType.INTEGER, allowNull: true})
    // parentId: number;

    @HasMany(() => News)
    news: News[];

}