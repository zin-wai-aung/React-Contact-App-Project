import React, { useState } from "react";
import NoData from "../../../components/lottieComponent/NoData";
import DataTablePage from "./DataTable.page";
import FormTool from "./FormTool";
import { IoMdPersonAdd } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetcontactQuery } from "../../../store/service/endpoint/contact.endpoint";

const Contact = () => {
  const { data } = useGetcontactQuery();
  const [editData, setEditData] = useState({ edit: false, data: null });
  const [searchContact, setSearchContact] = useState("");

  const datalists = data?.contacts?.data;

  const handleEdit = (id) => {
    const finder = datalists.find((data) => data.id === id);
    setEditData({ edit: true, data: finder });
  };

  const handleClose = () => {
    setEditData({ edit: false, data: null });
  };

  const filterContact = datalists?.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchContact.toLocaleLowerCase()) ||
      contact.email.toLowerCase().includes(searchContact.toLocaleLowerCase()) ||
      contact.address.toLowerCase().includes(searchContact.toLocaleLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchContact(e.target.value);
  };

  return (
    <>
      <div className=" w-[75%] mx-auto mt-5">
        <div className=" flex items-center space-x-5 py-4">
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
              placeholder="Search Contact..."
              onChange={handleChange}
              className=" rounded-xl border-3 py-4 shadow ps-10 border-MainDarkColor text-MainDarkColor"
            />
          </div>
        </div>
      </div>

      {/* contact data lists */}
      <div className=" mx-auto w-[75%] mt-5 dark:text-MainWhite text-MainDarkColor">
        {!datalists?.length > 0 ? (
          <NoData />
        ) : (
          <DataTablePage
            datalists={datalists}
            handleEdit={handleEdit}
            filterContact={filterContact}
          />
        )}
      </div>

      <SheetContent
        onClose={handleClose}
        onOverlayClick={handleClose}
        className=" bg-MainWhite m-0"
      >
        <SheetHeader>
          <SheetTitle>Contact information</SheetTitle>
          <FormTool editData={editData} handleClose={handleClose} />
        </SheetHeader>
      </SheetContent>
    </>
  );
};

export default Contact;
