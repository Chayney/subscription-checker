import { useState } from "react";
import type { Purpose, Subscription } from "../types/subscription";

export const useAddSubscription = () => {
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState(0);
    const [paymentDate, setPaymentDate] = useState(1);
    const [purpose, setPurpose] = useState<Purpose>('健康');

    const addInputServiceName = (event: React.ChangeEvent<HTMLInputElement>) => setServiceName(event.target.value);
    const addInputServicePrice = (event: React.ChangeEvent<HTMLInputElement>) => setServicePrice(event.target.valueAsNumber);
    const addInputPaymentDate = (event: React.ChangeEvent<HTMLInputElement>) => setPaymentDate(event.target.valueAsNumber);

    const handleAddSubscription = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newSubscription: Subscription = {
            name: serviceName,
            price: servicePrice,
            billing_day: paymentDate,
            purpose: purpose,
            status: 'active'
        };

        // ダミーAPIでテストしたい
        fetch('/api/subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSubscription)
        });
    }

    return {
        serviceName,
        servicePrice,
        paymentDate,
        purpose,
        setPurpose,
        addInputServiceName,
        addInputServicePrice,
        addInputPaymentDate,
        handleAddSubscription
    }
}