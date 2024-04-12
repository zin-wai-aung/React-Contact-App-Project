import React, { useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import SwitchTheme from "../../ui/theme/SwitchTheme";
import { useProfileQuery } from "../../../store/service/endpoint/auth.endpoint";
import { useNavigate } from "react-router-dom";


const navBar = () => {

  const nav = useNavigate();
  const { data, isError, isLoading } = useProfileQuery();
  

  const user = data?.user;
  
    // const handleLogout = (e) => {
    //   e.preventDefault();
    //   console.log("logout");
    //   localStorage.removeItem("token");
    //   nav("/");
    // };

  return (
    <Navbar shouldHideOnScroll className=" pt-5 w-full mx-auto">
      <NavbarBrand className=" -ms-12">
        <p
          onClick={() => nav("/home")}
          className="text-inherit font-Fonlog text-[2rem] flex flex-col items-start cursor-pointer"
        >
          <span className=" text-danger">Contact</span>
          <span className=" dark:text-MainWhite text-MainDarkColor leading-8 tracking-widest">
            APP
          </span>
        </p>
      </NavbarBrand>
      <NavbarContent justify="end" className=" -me-12">
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
        <NavbarItem>
          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                  description={user?.email}
                  name={user?.name}
                />
              </DropdownTrigger>
              {/* <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem onClick={handleLogout} color="danger" >
                    Log Out
                  </DropdownItem>
                </DropdownMenu> */}
            </Dropdown>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default navBar;
