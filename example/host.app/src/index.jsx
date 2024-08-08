import React, { lazy, Suspense, useEffect, useState } from "@mf/react";
import { createRoot } from "@mf/react-dom";
import { BrowserRouter, Link, Route, Routes, useLocation } from "@mf/react-router-dom";
import { ErrorBoundary } from "@mf/react-error-boundary";


const DynamicComponent = () => {
    const location = useLocation();
    const [ pathName, setPathName ] = useState(window.location.pathname);

    useEffect(() => {
        setPathName(window.location.pathname);
    }, [ location ]);

    const Page = lazy(() => import( /* @vite-ignore */ `@mf${pathName}`));
    return (
        <Suspense fallback={<div>{`Fetching @mf${pathName}`}</div>}>
            <ErrorBoundary fallback={<div>{`Could not find Module @mf${pathName}, check your importmap.`}</div>}>
                <Page/>
            </ErrorBoundary>
        </Suspense>
    );
};

const Home = () =>
    <div>
        <h1>Home Page</h1>
    </div>;

const Login = () =>
    <div>
        <h1>Login Page</h1>
    </div>;


const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sub-app1">Sub App 1</Link></li>
                    <li><Link to="/sub-app2">Sub App 2</Link></li>
                    <li><Link to="/sub-app3">Sub App 3 (Does not exist)</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<DynamicComponent path={window.location.pathname}/>}/>
            </Routes>
        </div>
    );

};

createRoot(document.getElementById("root")).render(
    <BrowserRouter><App/></BrowserRouter>
);
