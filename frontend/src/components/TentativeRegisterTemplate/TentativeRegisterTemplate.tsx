import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { NAVIGATION_LIST } from '../../const/navigation';

export const TentativeRegisterTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.TOP);
    }
    const handleMoveRegisterPage = () => {
        navigate(NAVIGATION_LIST.REGISTER);
    }
        
    return (
        <div className={styles.container}>
            <h1>サブスク仮登録</h1>
            <div className={styles.subInfo}>
                <p><strong>サービス名:</strong> Netflix</p>
                <p><strong>月額:</strong> 990円</p>
                <p><strong>支払日:</strong> 15日</p>
                <p><strong>目的:</strong> 娯楽</p>
            </div>
            <p className={styles.notice}>
                この情報はまだ正式に登録されていません。アカウントを作成すると、次回以降も管理できます。
            </p>

            <div className={styles.buttons}>
                <button className={styles.saveBtn} onClick={handleMoveRegisterPage}>
                    アカウント作成して正式登録
                </button>
                <button className={styles.deleteBtn} onClick={handleView}>
                    削除してトップに戻る
                </button>
            </div>
        </div>
    )
}