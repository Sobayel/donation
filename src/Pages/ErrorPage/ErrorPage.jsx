import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="pt-44 flex justify-center items-center flex-col">
            <h1 className="font-extrabold text-7xl mb-4">404</h1>
            <h2 className="text-blue-800 font-bold text-4xl mb-4">Opppss....!!!</h2>
            <p className="text-2xl font-semibold">Please Search This Right Path</p>
            <Link to={"/"}> <button className="btn btn-warning text-xl font-semibold mt-4">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;