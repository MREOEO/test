import React from 'react';
import LoginButton from '../components/LoginButton';

function Login(props) {
    console.log(props);
    return (
        <div style ={{textAlign : "center",}}>
            <div style ={{marginTop : 100}}>
                <h2>Login 화면 입니다...!!</h2>
                <LoginButton/>
            </div>
        </div>
    );
}

export default Login;