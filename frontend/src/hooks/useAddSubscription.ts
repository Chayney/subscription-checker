import { useState } from "react";
import type { Purpose, Subscription } from "../types/subscription";

export const useAddSubscription = () => {
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [purpose, setPurpose] = useState<Purpose | undefined>(undefined);

    // 成功/失敗フラグ
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addInputServiceName = (event: React.ChangeEvent<HTMLInputElement>) => setServiceName(event.target.value);
    const addInputServicePrice = (event: React.ChangeEvent<HTMLInputElement>) => setServicePrice(event.target.value);
    const addInputPaymentDate = (event: React.ChangeEvent<HTMLInputElement>) => setPaymentDate(event.target.value);

    const handleAddSubscription = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!purpose) {
            alert('purpose を選択してください');
            return;
        }

        const newSubscription: Subscription = {
            name: serviceName,
            price: Number(servicePrice),
            billing_day: Number(paymentDate),
            purpose: purpose,
            status: 'active'
        };

        // ダミーAPIでテスト
        try {
            const response = await fetch('http://localhost:3001/subscription', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSubscription)
            });
            if (!response.ok) throw new Error('登録失敗');
            const data = await response.json();
            console.log('登録成功:', data);
            setSaved(true);
            setError(null);
        } catch (error) {
            console.error(error);
        }    
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
        handleAddSubscription,
        saved,
        error,
        setSaved
    }
}