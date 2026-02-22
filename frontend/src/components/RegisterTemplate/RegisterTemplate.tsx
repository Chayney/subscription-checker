import { useRegister } from '../../hooks/useRegister';
import { Button } from '../../ui/button';
import styles from './style.module.css';

export const RegisterTemplate = () => {
    const { 
        userName,
        password,
        passwordConfirm,
        addInputUserName,
        addInputPassword,
        addInputPasswordConfirm,
        handleRegister
    } = useRegister();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ユーザー登録</h1>
            <form className={styles.form} onSubmit={handleRegister}>
                <div className={styles.area}>
                    <input className={styles.input} type="text" name="name" placeholder="User Name" value={userName} onChange={addInputUserName} />
                </div>
                <div className={styles.area}>
                    <input className={styles.input} type="password" name="password" placeholder="Password" value={password} onChange={addInputPassword} />
                </div>
                <div className={styles.area}>
                    <input className={styles.input} type="password" placeholder="Password Confirmation" value={passwordConfirm} onChange={addInputPasswordConfirm} />
                </div>
                <div className={styles.area}>
                    <Button type="submit" variant="secondary">登録</Button>
                </div>
            </form>
        </div>
    )
}