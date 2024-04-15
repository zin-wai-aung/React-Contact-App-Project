import React from "react";
import { AuthGuard, Navbar } from "../../components";
import { Sheet } from "@/components/ui/sheet";
import { useGetcontactQuery } from "../../store/service/endpoint/contact.endpoint";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { data } = useGetcontactQuery();

  return (
    <AuthGuard>
      <Sheet className=" bg-MainWhite m-0 p-0">
        <div className=" w-full h-full">
          <Navbar />
          <Outlet />
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
