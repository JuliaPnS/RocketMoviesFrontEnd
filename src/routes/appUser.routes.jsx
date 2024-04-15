import { Routes, Route } from 'react-router-dom';

import { HomeUser } from '../pages/HomeUser';

export function AppUserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeUser />} />
        </Routes>
    )
}