import React from 'react';

const LoginPage = () => {
    return (
        <div className="login">
            <h2>Log in to admin panel</h2>
                <label htmlFor="">Login</label> <input type="text" /><br />
                <label htmlFor="">Password</label> <input type="password" /><br />
            <button>Log in</button>
        </div>
    )
}

export default LoginPage;