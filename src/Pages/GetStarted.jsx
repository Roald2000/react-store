
import { Outlet, Link } from "react-router-dom"

export default function GetStarted() {



    return <section className="grid place-content-center place-items-center">
        <h1>Get Started by <Link className="font-bold font=[Poppins]" to={'signin'}>Signing In</Link></h1>
        <br />
        <Outlet />
        <br />
        <h1>Dont have an account? <Link className="font-bold font=[Poppins]" to={'signup'}>Sign Up</Link></h1>
    </section>
}