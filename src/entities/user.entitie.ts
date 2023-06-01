import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from "typeorm"
import { Spent } from "./spent.entitie"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({nullable:false})
    name!: string

    @Column({nullable:false})
    surname!: string

    @Column({nullable:false, default:1})
    isActive!: boolean
    
    @Column({nullable:true, default:false})
    google!: boolean
    
    @Column({nullable:false})
    password!: string

    @Column({nullable:false, unique:true})
    email!: string

    @Column({nullable:false})
    salary!: number

    @OneToMany(() => Spent, (spent) => spent.user)
    spents!: Spent[]

    @Column({ type: "timestamp" })
    createdAt!: Date;
  
    @Column({ type: "timestamp" })
    updatedAt!: Date;

    @BeforeInsert()
    setTimestamps() {
      const currentDate = new Date();
      this.createdAt = currentDate;
      this.updatedAt = currentDate;
    }
}

