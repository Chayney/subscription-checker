import { RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { createNewSubscription, getSubscriptions } from "../service/subscription.service";
import { sendError, sendSuccess } from "../shared/sendResponse";
import { HttpError } from "../shared/httpError";

export const validateCreateSubscription = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('price')
        .isInt({ min: 0 })
        .withMessage('price must be positive number'),
    check('billing_day')
        .isInt({ min: 1, max: 31 })
        .withMessage('billing_day must be 1-31'),
    check('purpose')
        .notEmpty()
        .withMessage('purpose is required'),
    // check('user.name')
    //     .notEmpty()
    //     .withMessage('user name required'),
    // check('user.password')
    //     .notEmpty()
    //     .withMessage('password required')
];

export const getSubscriptionHandler: RequestHandler = async (_req, res) => {
    try {
        const subscriptions = await getSubscriptions();
        sendSuccess(res, 200, subscriptions);
    } catch (error) {
        console.error(error);
        if (error instanceof HttpError) {
            sendError(res, error.statusCode, [error.message]);
            return;
        }
        sendError(res, 500);
    }
}

export const createSubscriptionHandler: RequestHandler = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessage = errors.array().map(e => e.msg as string);
        sendError(res, 400, errorMessage);
        return;
    }
    
    try {
        const subscription = await createNewSubscription(req.body);
        sendSuccess(res, 201, subscription);
    } catch (error) {
        console.error(error);
        if (error instanceof HttpError) {
            sendError(res, error.statusCode, [error.message]);
            return;
        }
        sendError(res, 500);
    }
};