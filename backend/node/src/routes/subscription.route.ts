import { Router } from "express";
import {
    createSubscriptionHandler,
    getSubscriptionHandler,
    validateCreateSubscription
} from "../controller/subscription.controller";

export const subscriptionRouter = Router();

subscriptionRouter.get(
    '/subscription',
    getSubscriptionHandler
);
subscriptionRouter.post(
    '/subscription',
    validateCreateSubscription,
    createSubscriptionHandler
);