import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from '@/pages/Home/HomePage'
import NotFountPage from '@/pages/404'
import { SpeedInsights } from '@vercel/speed-insights/react';

function RouterLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-(--background) relative overflow-hidden items-center">
            <Outlet />
        </div>
    )
}

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<RouterLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFountPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            
            <SpeedInsights />
        </>
    )
}

export default App
