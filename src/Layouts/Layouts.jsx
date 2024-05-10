import { Outlet } from "react-router-dom";
import FooterIs from "../Components/FooterIs";
import NavbarIs from "../Components/NavbarIs";


const Layouts = () => {
    return (
        <div>
            <NavbarIs></NavbarIs>
            <Outlet></Outlet>
            <FooterIs></FooterIs>
        </div>
    );
};

export default Layouts;