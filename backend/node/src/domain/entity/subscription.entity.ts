import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum SubscriptionStatus {
    ACTIVE = 'active',
    PAUSED = 'paused',
    CANCELED = 'canceled',
}

@Entity('subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn()
    readonly id!: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user!: User;

    @Column()
    userId!: number;

    @Column()
    public name!: string;

    @Column()
    public price!: number;

    @Column()
    public billing_day!: number;

    @Column()
    public purpose!: string;

    @Column({ enum: SubscriptionStatus, default: SubscriptionStatus.ACTIVE })
    public status!: SubscriptionStatus;

    @CreateDateColumn()
    readonly createdAt!: Date;

    @UpdateDateColumn()
    readonly updatedAt!: Date;
}