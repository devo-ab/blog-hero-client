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
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavbarIs = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinks = (
    <div className="md:space-x-5  md:space-y-0 flex flex-col md:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white md:text-lg font-medium border border-[#4D869C] bg-[#FFF2D7] rounded-md md:px-3 md:py-1 text-center"
            : "text-center"
        }
      >
        <NavbarLink>Home</NavbarLink>
      </NavLink>

      <NavLink
        to="/addblog"
        className={({ isActive }) =>
          isActive
            ? "text-base-content md:text-lg font-medium border border-[#4D869C] bg-[#FFF2D7] rounded-md md:px-3 md:py-1 text-center"
            : "text-base-content text-center"
        }
      >
        <NavbarLink>Add Blog</NavbarLink>
      </NavLink>

      <NavLink
        to="/allblogs"
        className={({ isActive }) =>
          isActive
            ? "text-base-content md:text-lg font-medium border border-[#4D869C] bg-[#FFF2D7] rounded-md md:px-3 md:py-1 text-center"
            : "text-base-content text-center"
        }
      >
        <NavbarLink>All Blogs</NavbarLink>
      </NavLink>

      <NavLink
        to="/featured"
        className={({ isActive }) =>
          isActive
            ? "text-base-content md:text-lg font-medium border border-[#4D869C] bg-[#FFF2D7] rounded-md md:px-3 md:py-1 text-center"
            : "text-base-content text-center"
        }
      >
        <NavbarLink>Featured</NavbarLink>
      </NavLink>

      {user && (
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "text-white md:text-lg font-medium border border-[#4D869C] bg-[#FFF2D7] rounded-md md:px-3 md:py-1 text-center"
              : "text-base-content text-center"
          }
        >
          <NavbarLink>Wishlist</NavbarLink>
        </NavLink>
      )}
    </div>
  );

  const handleSingOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast("Sign Out successfully");
        navigate('/')
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
        <span className="self-center whitespace-nowrap lg:text-2xl lg:font-bold dark:text-white">
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
      <NavbarCollapse>{navLinks}</NavbarCollapse>
      <Tooltip id="my-tooltip" />
      <ToastContainer />
    </Navbar>
  );
};

export default NavbarIs;
