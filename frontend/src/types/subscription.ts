export type SubscriptionStatus = 'active' | 'paused' | 'canceled';

export type Purpose = '健康' | '学習' | '娯楽' | '仕事' | 'その他';


export type Subscription = {
    name: string;
    price: number;
    billing_day: number;
    purpose: Purpose;
    status: SubscriptionStatus;
}

export type DataPoint = {
    month: string;
    count: number;
}