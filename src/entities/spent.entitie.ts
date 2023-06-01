import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, ManyToOne } from "typeorm"
import { User } from "./user.entitie"
import { CategorySpent } from "./categorySpent.entitie"
@Entity()
export class Spent {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable:false})
    name!: string

    @Column({nullable:false, default:1})
    isActive!: boolean

    @Column({nullable:false})
    precio!: number

    @ManyToOne(() => User, (user) => user.spents)
    user!:User

    @ManyToOne(() => CategorySpent, (categorySpent) => categorySpent.spents)
    categorySpent!:CategorySpent

    @Column({nullable:true})
    description!: string

}

