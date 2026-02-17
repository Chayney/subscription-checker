import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { NAVIGATION_LIST } from '../../const/navigation';

export const MonthlyCheckInTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.SUMMARY);
    }

    return (
        <div className={styles.container}>
            <header>
                <h1>今月のふりかえり</h1>
                {/* スキップを押したらログインユーザーのトップページに飛ばす */}
                <button className={styles.skip} onClick={handleView}>スキップ</button>
            </header>
            <section className={styles.card}>
                <div className={styles.serviceName}>Netflix</div>
                <div className={styles.price}>月額 1,490円</div>

                <div className={styles.inputArea}>
                    <div className={styles.label}>今月の利用回数</div>
                    <input type="number" placeholder="例：3" />
                </div>
                <div className={styles.inputArea}>
                    <div className={styles.label}>今月の満足度</div>
                    <div className={styles.emojiRow}>
                        <button>😊</button>
                        <button>😐</button>
                        <button>😞</button>
                    </div>
                </div>
                <div className={styles.inputArea}>
                    <div className={styles.label}>メモ（任意）</div>
                    <textarea placeholder="気づいたことがあれば"></textarea>
                </div>
            </section>
            <button className={styles.nextButton}>次へ</button>
        </div>
    )
}