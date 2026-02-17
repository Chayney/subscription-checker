import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { NAVIGATION_LIST } from '../../const/navigation';
import { useAddSubscription } from '../../hooks/useAddSubscription';
import type { Purpose } from '../../types/subscription';
import { useState } from 'react';

// 仮にログイン判定（実際は auth context などで管理）
const isLoggedIn = false;

export const AddSubscriptionTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.TOP);
    }
    const handleMoveRegisterPage = () => {
        navigate(NAVIGATION_LIST.REGISTER);
    }
    const handleMoveTentativeRegisterPage = () => {
        navigate(NAVIGATION_LIST.TENTATIVEREGISTER);
    }

    const [showModal, setShowModal] = useState(false);

    const { 
        serviceName,
        servicePrice,
        paymentDate,
        purpose,
        saved,
        setPurpose,
        addInputServiceName,
        addInputServicePrice,
        addInputPaymentDate,
        handleAddSubscription
    } = useAddSubscription();

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleAddSubscription(event);

        if (saved && !isLoggedIn) {
            setShowModal(true);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button onClick={handleView} className={styles.backButton}>← 戻る</button>
                <h1>サブスクを登録</h1>
            </header>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                    <div className={styles.purposeButtons}>
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
                </div>
                <div className={styles.submitArea}>
                    <button type="submit" className={styles.saveButton}>保存する</button>
                </div>
            </form>

            {/* 保存後モーダル */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <p>サブスクを保存しました！<br />アカウントを作ると、次回も続けられます</p>
                        {/* 注意書き */}
                        <p className={styles.modalNotice}>
                            「後で」を選択すると仮登録ページにいきます
                        </p>
                        <div className={styles.modalButtons}>
                            <button
                                className={styles.createAccountButton}
                                onClick={handleMoveRegisterPage}
                            >
                                アカウント作成
                            </button>
                            <button
                                className={styles.laterButton}
                                onClick={handleMoveTentativeRegisterPage}
                            >
                                後で
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}