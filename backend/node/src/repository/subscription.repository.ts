import { Subscription } from "../domain/entity/subscription.entity";
import { AppDataSource } from "../config/appDataSource";
import { FindManyOptions } from "typeorm";

export const findAllSubscription = async (
    options?: FindManyOptions<Subscription>
) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(Subscription);

    try {
        return await repository.find(options);
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to find subscriptions: ${error}`);
    }
};

export const findSubscription = async (id: number) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(Subscription);

    try {
        return await repository.findOne({
            where: { id }
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to find subscription: ${error}`);
    }
};

export const createSubscription = async (
    subscription: Subscription
) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(Subscription);

    try {
        return await repository.save(subscription);
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to create subscription: ${error}`);
    }
};

export const updateSubscription = async (
    subscription: Subscription
) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(Subscription);

    try {
        return await repository.save(subscription);
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to update subscription: ${error}`);
    }
};

export const deleteSubscription = async (id: number) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(Subscription);

    try {
        return await repository.delete(id);
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to delete subscription: ${error}`);
    }
};