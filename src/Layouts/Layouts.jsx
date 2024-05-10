import { Outlet } from "react-router-dom";
import FooterIs from "../Components/FooterIs";
import NavbarIs from "../Components/NavbarIs";


const Layouts = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <NavbarIs></NavbarIs>
            <Outlet></Outlet>
            </div>
            <FooterIs></FooterIs>
        </div>
    );
};

export default Layouts;