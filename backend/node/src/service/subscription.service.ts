import { Subscription, SubscriptionStatus } from "../domain/entity/subscription.entity";
import { User } from "../domain/entity/user.entity";
import {
    createSubscription,
    findAllSubscription
} from "../repository/subscription.repository";
import {
    findUserByName,
    createUser
} from "../repository/user.repository";

// フロント型に沿ったDTO
export type CreateSubscriptionRequest = {
    user: {
        name?: string | null;
        password?: string | null;
        is_guest: boolean;
    };
    name: string;
    price: number;
    billing_day: number;
    purpose: '健康' | '学習' | '娯楽' | '仕事' | 'その他';
    status: SubscriptionStatus;
};

export const getSubscriptions = async () => {
    return await findAllSubscription();
}

export const createNewSubscription = async (param: CreateSubscriptionRequest) => {
    let existingUser = await findUserByName(param.user.name ?? '');

    if (!existingUser) {
        const user = new User();
        user.is_guest = param.user.is_guest;

        existingUser = await createUser(user);
    }

    const subscription = new Subscription();
    subscription.name = param.name;
    subscription.price = param.price;
    subscription.billing_day = param.billing_day;
    subscription.purpose = param.purpose;
    subscription.status = param.status;
    subscription.userId = existingUser.id;

    return await createSubscription(subscription);
};