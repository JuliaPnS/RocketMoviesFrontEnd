import { BrowserRouter } from 'react-router-dom';
import { AppUserRoutes } from './appUser.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AppUserRoutes />
        </BrowserRouter>
    )
}