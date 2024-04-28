import { BrowserRouter } from 'react-router-dom';
import { AppUserRoutes } from './appUser.routes';
import { AuthUserRoutes } from './authUser.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AuthUserRoutes />
        </BrowserRouter>
    )
}