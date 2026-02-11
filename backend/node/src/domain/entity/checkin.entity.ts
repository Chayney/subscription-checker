import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Subscription } from './subscription.entity';

@Entity('checkins')
export class Checkin {
    @PrimaryGeneratedColumn()
    readonly id!: number;

    @ManyToOne(() => Subscription, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'subscriptionId' })
    subscription!: Subscription;

    @Column()
    subscriptionId!: number;

    @Column()
    public month!: string;

    @Column()
    public emotion!: string;

    @Column()
    public reason!: string;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;
}