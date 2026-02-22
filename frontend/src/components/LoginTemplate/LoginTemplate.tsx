import { Button } from '../../ui/button';
import styles from './style.module.css';

export const LoginTemplate = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ユーザーログイン</h1>
            <form className={styles.form}>
                <div className={styles.area}>
                    <input className={styles.input} type="text" name="name" placeholder="User Name" />
                </div>
                <div className={styles.area}>
                    <input className={styles.input} type="password" name="password" placeholder="Password" />
                </div>
                <div className={styles.area}>
                    <Button type="submit" variant="secondary">ログイン</Button>
                </div>
            </form>
        </div>
    )
}