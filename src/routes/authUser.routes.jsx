import { Routes, Route } from 'react-router-dom';

import { SignIn } from  '../pages/SignIn';
import { SignUp } from  '../pages/SignUp';

export function AuthUserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />}/>
        </Routes>
    )
}