import { Routes, Route } from 'react-router-dom';

import { HomeUser } from '../pages/HomeUser';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';   
 
export function AppUserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/new-movie' element={<NewMovie />} />
        </Routes>
    )
}