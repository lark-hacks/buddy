import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthApi from './AuthApi';
// import useToken from './components/useToken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {}

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

  const [auth, setAuth] = React.useState(false);

  return (
    <div className="main">
      <h1>Hello</h1>
      <AuthApi.Provider value={{auth, setAuth}}>
      <Router>
        <AllRoutes />
      </Router>
      </AuthApi.Provider>

      <div id="left">

      </div>
      <div id="middle">

      </div>
      <div id="right">

      </div>
    </div>
  );
}

const AllRoutes = () => {
  const Auth = React.useContext(AuthApi);
  return (  
    <Routes>
      <Route path='/login' component={Login} auth={Auth.auth}/>
      <ProtectedRoute path='/dashboard' auth={Auth.auth} component={Dashboard} />
    </Routes>
  )
}

const ProtectedRoute = ({auth, component:Component,...rest}) => {
  return (
    <Route
    {...rest}
    render ={() => !auth? (
      <Component/>
    ):
      (
        <Navigate to="/dashboard" />
      )
  }
    />
  )
}

export default App;
