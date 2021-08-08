import { Transform } from 'class-transformer';
import { ObjectID } from 'mongodb';
import { Entity, ObjectIdColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: 'financial-control' })
export class FinancialControl extends BaseEntity{

    @ObjectIdColumn({ name: '_id' })
    @Transform((value) => value.toString(), { toPlainOnly: true })
    _id: ObjectID

    @Column()
    name: string

    @Column()
    title: string

    @Column()
    value: string

    @Column()
    defaultedSince: string

}