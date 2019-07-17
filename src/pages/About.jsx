import React from 'react';
import quertString from 'query-string';

function About({location}) {
    // const search = new URLSearchParams(location.search);
    // console.log(search.get('name'));
    const query = quertString.parse(location.search);
    console.log(query);
    const name = query.name;
    console.log(name);
    return (
        <div style ={{textAlign : "center"}}>
            <div style ={{marginTop : 100}}>
                <h2>About 화면 입니다...!!</h2>
                {name && <p>name은 {name}입니다</p>}
            </div>
        </div>
    );
}
export default About;