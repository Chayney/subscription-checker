import styles from './style.module.css';

export const MonthlyCheckInTemplate = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>今月のふりかえり</h1>
                <button className={styles.skip}>スキップ</button>
            </header>
            <section className={styles.card}>
                <h2 className={styles.serviceName}>Netflix</h2>
                <p className={styles.question}>今月どうでしたか？</p>
                <div className={styles.emojiRow}>
                    <button className={styles.emoji}>😊</button>
                    <button className={styles.emoji}>😐</button>
                    <button className={styles.emoji}>😞</button>
                </div>
                <div className={`${styles.reason} ${styles.hidden}`}>
                    <p className={styles.reasonLabel}>使わなかった理由（あれば）</p>
                    <div className={styles.reasonButtons}>
                        <button>忙しかった</button>
                        <button>気分じゃなかった</button>
                        <button>期待と違った</button>
                        <button>忘れてた</button>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <button className={styles.nextButton}>次へ</button>
            </footer>
        </main>
    )
}