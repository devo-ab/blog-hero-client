import { Outlet } from "react-router-dom";
import FooterIs from "../Components/FooterIs";

const Layouts = () => {
    return (
        <div>
            <Outlet></Outlet>
            <FooterIs></FooterIs>
        </div>
    );
};

export default Layouts;