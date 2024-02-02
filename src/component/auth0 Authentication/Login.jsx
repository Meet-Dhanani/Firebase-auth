import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Logout from './Logout';

const Login = () => {

    const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
    console.log(user, isAuthenticated);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {
                isAuthenticated ?
                    <Logout /> :
                    <button onClick={() => loginWithRedirect()}>Log In</button>
            }
            <h2>{user?.name}</h2>
            <h2>{user?.email}</h2>
        </>
    )
}

export default Login