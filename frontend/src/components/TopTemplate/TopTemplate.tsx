import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { NAVIGATION_LIST } from '../../const/navigation';

export const TopTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.CREATE);
    }

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <p className={styles.catch}>
                    見えているのに、決められない。
                </p>
                <h1 className={styles.title}>
                    サブスクのための意思決定メモ
                </h1>
            </header>

            <section className={styles.description}>
                <p>
                    お金の管理ではなく、<br />
                    「続けるかどうか」を考えるためのアプリです。
                </p>
            </section>

            <section className={styles.cta}>
                <button onClick={handleView} className={styles.ctaButton}>
                    ＋ サブスクを1つ登録する
                </button>
            </section>
        </main>
    )
}