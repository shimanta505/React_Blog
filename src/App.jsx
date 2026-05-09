import { useState } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/auth/Login';
const App = () => {

    return (
        <>
            <UserContextProvider>
                <h1> react context</h1>
                <Login/>
            </UserContextProvider>
        </>
    );
}

export default App;