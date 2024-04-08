import React from "react";
import { AuthGuard, Navbar } from "../../components";
import { IoMdPersonAdd } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {NoData} from "../../components"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";


const HomePage = () => {

  return (
    <AuthGuard>
      <Sheet>
        <div className=" w-full h-full">
          <Navbar />
          <div className=" w-[70%] mx-auto mt-5">
            <div className=" flex items-center space-x-5 p-4">
              <SheetTrigger>
                <div
                  type="button"
                  className="space-x-2 bg-MainRed text-white hover:bg-DarkHoverColor flex items-center py-2  px-4 rounded-lg"
                >
                  <IoMdPersonAdd />
                  <p>Add contact</p>
                </div>
              </SheetTrigger>

              <div className="relative flex justify-between items-center rounded-full">
                <FaSearch className=" absolute text-MainDarkColor dark:text-MainWhite   left-4 text-sm" />
                <Input
                  id="email"
                  placeholder="Search Contact..."
                  className=" rounded-xl border-3 py-4 shadow ps-10 border-MainDarkColor text-MainDarkColor"
                />
              </div>
            </div>
          </div>
          <NoData />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Contact information</SheetTitle>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
