import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavbarIs = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast("Sign Out successfully");
      })
      .catch((error) => {
        console.log(error);
        toast("Something wrong, please try again");
      });
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src="/blog-hero-logo.png" className="mr-3 h-6 sm:h-9" alt="Blog Hero Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Blog Hero
        </span>
      </NavbarBrand>
      <div className="flex gap-2 md:order-2">
        {user ? (
          <div className="flex flex-wrap gap-2">
            <Avatar
              img={user.photoURL}
              alt="avatar of Jese"
              rounded
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
            />
            <Button onClick={handleSingOut}>Sign Out</Button>
          </div>
        ) : (
          <div className="flex gap-2 md:order-2">
            <NavLink to="/signIn">
              <Button>SingIn</Button>
            </NavLink>
            <NavLink to="/signUp">
              <Button>SingUp</Button>
            </NavLink>
          </div>
        )}

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Add Blog</NavbarLink>
        <NavbarLink href="#">All Blogs</NavbarLink>
        <NavbarLink href="#">Featured</NavbarLink>
        <NavbarLink href="#">Wishlist</NavbarLink>
      </NavbarCollapse>
      <Tooltip id="my-tooltip" />
      <ToastContainer />
    </Navbar>
  );
};

export default NavbarIs;
