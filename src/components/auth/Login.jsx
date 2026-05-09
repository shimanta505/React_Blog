import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser, user } = useContext(UserContext);

    const submit = (e) => {
        e.preventDefault()
        setUser({ userName, password });
    }
    return (
        <div className='h-full w-full flex bg-amber-600'>
            <div>
            <h2>Login</h2>
            <input type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='username' />
            {" "}
            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={submit}>Submit</button>
            </div>
            <div className='w-full flex items-center'>
                {
                    user ? <h2>{user.useName + " " + user.password}</h2> : <h2>no user</h2>
                }
            </div>
        </div>
        
    )
}

export default Login