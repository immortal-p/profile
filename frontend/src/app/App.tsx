import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from '@/pages/Home/HomePage'

function RouterLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-(--background) relative overflow-hidden items-center">
            <Outlet />
        </div>
    )
}

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route element={<RouterLayout />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App