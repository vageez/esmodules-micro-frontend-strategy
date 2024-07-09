import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const SubAppLoader = ({ name }) => {
    const SubApp = React.lazy(() => import(name));
    console.log("SubAppLoader", SubApp);
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <SubApp/>
        </React.Suspense>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sub-app1">Sub App 1</Link></li>
                    <li><Link to="/sub-app2">Sub App 2</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sub-app1" element={<SubAppLoader name="sub-app1"/>}/>
                <Route path="/sub-app2" element={<SubAppLoader name="sub-app2"/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );

};

createRoot(document.getElementById("root")).render(
    <BrowserRouter><App/></BrowserRouter>
);
