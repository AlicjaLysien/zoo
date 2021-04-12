import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h2>Log in to admin panel</h2>
            <label htmlFor="">Login<input type="text" /></label>
            <label htmlFor="">Password<input type="password" /></label>
            <button>Log in</button>
        </div>
    )
}

export default LoginPage;