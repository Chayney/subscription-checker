import styles from './style.module.css';

export const RegisterTemplate = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ユーザー登録</h1>
            <form className={styles.form}>
                <div className={styles.area}>
                    <input className={styles.input} type="text" name="name" placeholder="User Name" />
                </div>
                <div className={styles.area}>
                    <input className={styles.input} type="password" name="password" placeholder="Password" />
                </div>
                <div className={styles.area}>
                    <input className={styles.input} type="password" placeholder="Password Confirmation" />
                </div>
                <div className={styles.area}>
                    <button className={styles.button} type="submit">登録</button>
                </div>
            </form>
        </div>
    )
}