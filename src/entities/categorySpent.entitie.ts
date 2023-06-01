import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from "typeorm"
import { Spent } from "./spent.entitie"
@Entity()
export class CategorySpent {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable:false})
    name!: string

    @Column({nullable:false, default:1})
    isImportant!: boolean

    @OneToMany(() => Spent, (spent) => spent.categorySpent)
    spents!: Spent[]

    @Column()
    img!: string

}
