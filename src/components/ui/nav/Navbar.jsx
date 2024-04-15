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
  MenuItem,
  Button,
} from "@nextui-org/react";
import SwitchTheme from "../../ui/theme/SwitchTheme";
import {
  useLogoutMutation,
  useProfileQuery,
} from "../../../store/service/endpoint/auth.endpoint";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";
import { useToast } from "@/components/ui/use-toast";

const navBar = () => {
  const { toast } = useToast();

  const nav = useNavigate();
  const { data } = useProfileQuery();
  const [logoutFun,{isLoading}] = useLogoutMutation();

  const user = data?.user;

  const handleLogout = async () => {
    await logoutFun();
    localStorage.removeItem("token")
    nav("/")
    toast({
      description: "Logout Successfull",
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                  <DropdownMenu aria-label="User Actions">
                    <DropdownItem color="danger" onClick={handleLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      )}
    </>
  );
};

export default navBar;
