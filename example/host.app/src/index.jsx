import React from "@mf/react";
import { createRoot } from "@mf/react-dom";
import { BrowserRouter, Link, Route, Routes } from "@mf/react-router-dom";
import SubApp1 from "@mf/sub-app1";
import SubApp2 from "@mf/sub-app2";


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
                <Route path="/sub-app1" element={<SubApp1/>}/>
                <Route path="/sub-app2" element={<SubApp2/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );

};

createRoot(document.getElementById("root")).render(
    <BrowserRouter><App/></BrowserRouter>
);
