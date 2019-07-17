import React from 'react';
import {withRouter} from 'react-router-dom';

function LoginButton(props) {

     return(
         <>
            <button onClick={()=>{
                    console.log('clicked');
                    setTimeout(()=>{
                        props.history.push('/');
                    }, 500);
            }}>
                Login
            </button>
         </>
     )
}

export default withRouter(LoginButton);