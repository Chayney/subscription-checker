import { useNavigate } from 'react-router-dom';
import type { DataPoint } from '../../types/subscription';
import styles from './style.module.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { NAVIGATION_LIST } from '../../const/navigation';
import { Button } from '../../ui/button';

const data: DataPoint[] = [
    { month: "3ヶ月前", count: 12 },
    { month: "2ヶ月前", count: 4 },
    { month: "先月", count: 0 }
];

export const SummaryTemplate = () => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate(NAVIGATION_LIST.CHECKIN);
    }
    
    return (
        // ログインユーザー専用トップページ
        <div className={styles.container}>
            <h1>サブスク利用状況チェック</h1>
            {/* 振り返るを押したら月次チェックインページに飛ぶ */}
            <div className={styles.navigation}>
                {/* すでに月次チェックイン済みなら非表示 */}
                <Button onClick={handleView} variant="secondary">振り返る</Button>

                <Button variant="secondary">ログアウト</Button>
            </div>
            <div className={styles.subtitle}>
                {/* purposeを使う */}
                「健康のため」に始めたサブスク / 月額 3,000円
            </div>
            <div className={styles.section}>
                <strong>直近3ヶ月の利用状況</strong>
                <div className={styles.chartBox} style={{ width: "100%", height: 250 }}>
                    <ResponsiveContainer>
                        <LineChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <XAxis dataKey="month" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="count"
                                stroke="#1565c0"
                                strokeWidth={2}
                                dot={{ r: 5, fill: "#1565c0" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.statBox}>
                    支払総額：9,000円
                </div>
            </div>
        </div>
    )
}