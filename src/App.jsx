// Dependencies
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

// Pages
import HomePage from './Pages/HomePage';
import Products from "./Pages/Products";
// Assets
import NotFoundPage from './Pages/NotFoundPage';

import { FetchItems } from './Data/DataProvider';

function NavJSX() {

    const [open, setOpen] = useState(false);
    // const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    const setDarkMode = (value) => {
        const appRoot = document.documentElement;
        if (value) {
            appRoot.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            appRoot.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    };

    const toggleMode = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(!isDarkMode);
    };

    return <header className="shadow-md w-full sticky top-0 left-0  z-50">
        <div className="flex justify-between items-center p-3">
            <Link className="md:text-xl text-2xl" to={'/react-store'}>Home</Link>
            <button className="md:text-xl text-2xl md:hidden bg-none" onClick={() => { setOpen(!open) }} >
                <i className="fa-solid fa-bars bg-none"></i>
            </button>
            <ul className={`md:static bg-black md:bg-transparent  absolute md:flex md:flex-row md:p-0 p-3 md:w-fit  w-full flex-col justify-start items-start md:items-center gap-3 ${open ? 'top-[100%] left-0' : 'top-[-500%] left-0'} transition-all duration-300`}>
                <li>
                    <Link to={'/About'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/react-store/Products'}>Products</Link>
                </li>
                <li>
                    <Link to={'/react-store/Contact'}>Contact</Link>
                </li>
                <li onClick={toggleMode}>
                    <i className={`fa-solid ${localStorage.getItem('darkMode') ? 'fa-sun' : 'fa-moon'}`}></i>
                </li>
            </ul>
        </div>
    </header>
}

function AppContent() {
    return <>
        <div className="mx-auto my-0">
            <NavJSX />
            <br />
            <main className="p-6  w-full h-auto flex flex-col">
                <Outlet />
            </main>
        </div>
    </>
}


export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="react-store" element={<AppContent />}>
                <Route path="/react-store" element={<HomePage />} />
                <Route path="/react-store/Products" element={<Products />} loader={FetchItems} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </>
    ))

    return <RouterProvider router={router} />
}

