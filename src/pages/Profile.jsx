import React from 'react';

function Profile({match}) {
    const id = match.params.id;
    console.log(id, typeof id);
    return (
        <div style ={{textAlign : "center"}}>
            <div style ={{marginTop : 100}}>
                <h2>Profile 화면 입니다...!!</h2>
                {id&&<p>id는 {id}</p>}
                </div>
        </div>
    );

}

export default Profile;