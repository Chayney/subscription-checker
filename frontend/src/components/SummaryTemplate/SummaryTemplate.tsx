import styles from './style.module.css';

export const SummaryTemplate = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>このサブスクの状態</h1>
            </header>
            <section className={styles.content}>
                <p className={styles.mainText}>
                    「健康のため」に始めたサブスク<br />
                    直近3ヶ月は「忙しい」が理由で未使用
                </p>
            </section>
            <section className={styles.emotionHistory}>
                <p className={styles.label}>感情の推移</p>
                <div className={styles.emojis}>
                    <span>😊</span>
                    <span className={styles.arrow}>→</span>
                    <span>😐</span>
                    <span className={styles.arrow}>→</span>
                    <span>😞</span>
                </div>
            </section>
            <section className={styles.suggestion}>
                <p className={styles.suggestionLead}>
                    今すぐ決めなくても大丈夫です
                </p>

                <div className={styles.suggestionBox}>
                    <p className={styles.suggestionTitle}>おすすめ：</p>
                    <ul>
                        <li>来月もう一度振り返る</li>
                        <li>一時停止扱いにする</li>
                        <li>解約を検討する</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}