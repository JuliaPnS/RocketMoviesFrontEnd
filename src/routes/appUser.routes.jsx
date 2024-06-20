import { Routes, Route } from 'react-router-dom';

import { HomeUser } from '../pages/HomeUser';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';
import { MovieInfo } from '../pages/MovieInfo';
 
export function AppUserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/new-movie' element={<NewMovie />} />
            <Route path='/movie-info' element={<MovieInfo />} />
        </Routes>
    )
}