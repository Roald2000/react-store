import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl">Page not found</p>
                <br />
                <Link className="p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-400 duration-300" to={'/react-store'}>Go back</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
