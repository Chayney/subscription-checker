import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NAVIGATION_LIST } from "../const/navigation"
import { Top } from "../pages/Top"
import { AddSubscription } from "../pages/AddSubscription"
import { MonthlyCheckIn } from "../pages/MonthlyCheckIn"
import { Summary } from "../pages/Summary"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={NAVIGATION_LIST.TOP} element={<Top />} />
                <Route path={NAVIGATION_LIST.CREATE} element={<AddSubscription />} />
                <Route path={NAVIGATION_LIST.CHECKIN} element={<MonthlyCheckIn />} />
                <Route path={NAVIGATION_LIST.SUMMARY} element={<Summary />} />
            </Routes>
        </BrowserRouter>
    )
}