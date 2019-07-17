import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import quertString from 'query-string';

const activeStyle = {
  color: "green"
};

let isLogin = true;
function App() {
  return (
    <>
    <BrowserRouter>
      <div className="head">
        <ul className="menu clearfix">
            <div className="menu-item">
            <NavLink exact to="/" activeStyle={activeStyle}> 
                Home
            </NavLink>
            </div>

            <div className="menu-item">
            <NavLink exact to="/Profile" activeStyle={activeStyle}>
                Profile
            </NavLink>
            </div>

            <div className="menu-item">
            <NavLink exact to="/Profile/1" activeStyle={activeStyle}>
                Profile/1
            </NavLink>
            </div>

            <div className="menu-item">
            <NavLink activeStyle={activeStyle} to="/about" 
            isActive={(match, location) => {
                console.log(match, location)
                if(location.pathname !== '/about') return false;
                const query = quertString.parse(location.search);
                return query.name === undefined;
            }}>About</NavLink></div>

            <div className="menu-item">
            <NavLink 
            activeStyle={activeStyle} to="/about?name=eo" 
            isActive={(match, location) => {
                if(location.pathname !== '/about') return false;
                const query = quertString.parse(location.search);
                return query.name !== undefined;
            }}>About?name=eo</NavLink></div>

            <div className="menu-item">
            <NavLink exact to="/login" activeStyle={activeStyle}>
                 Login
            </NavLink>
            </div>
        </ul>
        </div>

        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/Profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/login" render={() => {
            if(isLogin) {
              return <Redirect to="/"/>
            }
            return <Login/>;
          }} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
