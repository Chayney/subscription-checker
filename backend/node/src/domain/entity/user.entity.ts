import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    readonly id!: number;

    @Column({ unique: true, nullable: true })
    public name!: string;

    @Column({ nullable: true })
    public password!: string;

    @Column({ default: true })
    is_guest!: boolean;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;
}