import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { NAVIGATION_LIST } from '../../const/navigation';
import { useAddSubscription } from '../../hooks/useAddSubscription';
import type { Purpose } from '../../types/subscription';

export const AddSubscriptionTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.TOP);
    }

    const { 
        serviceName,
        servicePrice,
        paymentDate,
        purpose,
        setPurpose,
        addInputServiceName,
        addInputServicePrice,
        addInputPaymentDate,
        handleAddSubscription
    } = useAddSubscription();

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <button onClick={handleView} className={styles.backButton}>← 戻る</button>
                <h1>サブスクを登録</h1>
            </header>
            <form className={styles.form} onSubmit={handleAddSubscription}>
                <div className={styles.formGroup}>
                    <label>サービス名</label>
                    <input type="text" value={serviceName} onChange={addInputServiceName} placeholder="例：Netflix" />
                </div>
                <div className={styles.formGroup}>
                    <label>月額（円）</label>
                    <input type="number" value={servicePrice} onChange={addInputServicePrice} placeholder="例：990" />
                </div>
                <div className={styles.formGroup}>
                    <label>支払日（1〜31）</label>
                    <input type="number" min="1" max="31" value={paymentDate} onChange={addInputPaymentDate} placeholder="例：15" />
                </div>
                <div className={styles.purpose}>
                    <p className={styles.purposeLabel}>このサブスク、何のために？</p>
                    {['健康', '学習', '娯楽', '仕事', 'その他'].map((p) => (
                        <button
                            key={p}
                            type="button"
                            className={purpose === p ? styles.selected : ''}
                            onClick={() => setPurpose(p as Purpose)}
                        >
                            {p}
                        </button>
                    ))}
                </div>
                <div className={styles.submitArea}>
                    <button type="submit" className={styles.saveButton}>保存する</button>
                </div>
            </form>
        </main>
    )
}