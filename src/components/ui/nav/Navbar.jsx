import React from "react";
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

const navBar = () => {

  return (
      <Navbar shouldHideOnScroll className=" pt-5">
        <NavbarBrand>
          <p className="text-inherit font-Fonlog text-[2rem] flex flex-col items-start">
            <span className=" text-danger">Contact</span>
            <span className=" dark:text-MainWhite text-MainDarkColor leading-8 tracking-widest">
              APP
            </span>
          </p>
        </NavbarBrand>
        <NavbarContent justify="end" >
          <NavbarItem>
            <SwitchTheme />
          </NavbarItem>
          <NavbarItem>
            <div className="flex items-center gap-4">
              <Dropdown placement="bottom-start">
                <DropdownTrigger >
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description="@tonyreichert"
                    name="Tony Reichert"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="logout" color="danger" >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  );
};

export default navBar;
