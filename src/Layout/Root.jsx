import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shahed/NavBar/NavBar";
import Home from "../Pages/Home/Home";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;