// Dependencies
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from "react-router-dom"
import { useState } from "react";

// Pages
import HomePage from './Pages/HomePage';
import GetStarted from "./Pages/GetStarted";
/*Get Started Sub Page*/ import SignIn from './Pages/SignIn';
/*Get Started Sub Page*/import SignUp from './Pages/SignUp';

// Assets
import pagenotFoundIMG from './assets/404pgnotfound.jpg'


function NavJSX() {

    const [open, setOpen] = useState(false);


    return <header className="shadow-md w-full sticky top-0 left-0 bg-white">
        <div className="flex justify-between items-center p-3">
            <Link className="md:text-xl text-2xl" to={'/react-store'}>Home</Link>
            <button className="md:text-xl text-2xl md:hidden" onClick={() => { setOpen(!open) }} >
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`md:static absolute md:z-[99] z-[99] bg-white md:flex md:flex-row md:p-0 p-3 md:w-fit  w-full flex-col justify-start items-start md:items-center gap-3 ${open ? 'top-[100%] left-0' : 'top-[-500%] left-0'} transition-all duration-500`}>
                <li className="my-3 md:my-0">
                    <Link className="  hover:bg-indigo-400 duration-500 bg-indigo-600 p-2 rounded-md text-white flex justify-start gap-2 items-center" to={'/react-store/cart'}>
                        <span>Cart</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                </li>
                <li className="my-3 md:my-0">
                    <Link className="  hover:bg-indigo-400 duration-500 bg-indigo-600 p-2 rounded-md text-white flex gap-2 justify-start items-center" to={'/react-store/products'}>
                        <span>Products</span>
                        <i className="fa-solid fa-shop"></i>
                    </Link>

                </li>
                <li className="my-3 md:my-0">
                    <Link className="  hover:bg-indigo-400 duration-500 bg-indigo-600 p-2 rounded-md text-white flex justify-start gap-2 items-center" to={'/react-store/get_started/signin'}>
                        <span>Get Started</span>
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </Link>
                </li>
                <li className="my-3 md:my-0">
                    <form onSubmit={(formEvent) => {
                        formEvent.preventDefault();
                        alert('You clicked Search')
                    }} className="relative w-full">
                        <input onKeyDown={(e) => {
                            if (e.key === " ") e.preventDefault();
                        }} className="p-2 rounded-md border border-slate-300 w-full" type="text" name="" id="" placeholder="Search Products..." />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass absolute bg-white p-2 right-2 top-1/2 -translate-y-1/2"></i>
                        </button>
                    </form>
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
        <Route path="react-store" element={<AppContent />}>
            <Route path="/react-store" element={<HomePage />} />
            <Route path="/react-store/get_started" element={<GetStarted />} >
                <Route path="/react-store/get_started/signin" element={<SignIn />} />
                <Route path="/react-store/get_started/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    ))

    return <RouterProvider router={router} />
}


function NotFound() {
    return <div className="max-w-[468px] mx-auto my-0 pointer-events-none select-none">
        <img src={pagenotFoundIMG} alt="" className="" />
    </div>
}