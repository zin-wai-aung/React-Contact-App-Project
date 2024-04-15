import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Spinner } from "@nextui-org/react";
import {
  useCreatecontactMutation,
  useUpdatecontactMutation,
} from "../../../store/service/endpoint/contact.endpoint";
import { SheetClose } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";

const FormTool = ({ editData, handleClose }) => {
  const { toast } = useToast();

  const [addFun, { data, isError, isLoading }] = useCreatecontactMutation();
  const [updateFun, apiData] = useUpdatecontactMutation();

  const closeRef = useRef();

  const initialValues = {
    name: editData?.data?.name || "",
    phone: editData?.data?.phone || "",
    email: editData?.data?.email || "",
    address: editData?.data?.address || "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "Name must be at least 4 character"),
    phone: yup
      .string()
      .required("Phone Number is required")
      .min(9, "Phone must be at least 9 digits")
      .max(11, "Phone must be at most 11 digits"),
    email: yup.string().email("Invalid email format"),
    address: yup.string(),
  });

  const handleSubmit = async (value) => {
    if (editData.edit) {
      await updateFun({ id: editData.data?.id, ...value });

      toast({
        color: "#94A3B8",
        description: "Successfully Updated.",
      });
    } else {
      await addFun(value);
    }
    closeRef.current.click();
  };

  return (
    <div className="w-full h-full mt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <>
            <Form>
              <div className="w-full h-full flex flex-col justify-between space-y-3">
                <div className=" space-y-3 pb-10">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className=" font-bold mb-1">
                      Contact Name
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      type="text"
                      id="name"
                      className=" bg-FormColor border-none"
                    />
                    <ErrorMessage
                      className=" text-danger font-light text-sm"
                      name="name"
                      component="div"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className=" font-bold mb-1">
                      Phone Number
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      type="number"
                      id="phone"
                      className=" bg-FormColor border-none"
                    />
                    <ErrorMessage
                      className=" text-danger font-light text-sm"
                      name="phone"
                      component="div"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className=" font-bold mb-1">
                      Email
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      id="email"
                      className=" bg-FormColor border-none"
                    />
                    <ErrorMessage
                      classemail=" text-danger font-light text-sm"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className=" font-bold mb-1">
                      Address
                    </Label>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      type="text"
                      id="address"
                      className=" bg-FormColor border-none"
                    />
                    <ErrorMessage
                      classaddress=" text-danger font-light text-sm"
                      name="address"
                      component="div"
                    />
                  </div>
                </div>
                <div className=" pt-36 flex justify-end">
                  <div className=" flex items-center mt-5 space-x-5">
                    <SheetClose ref={closeRef}>
                      <Button
                        type="button"
                        onClick={handleClose}
                        className=" text-white w-full bg-MainDarkColor bg-opacity-40 hover:bg-MainDarkColor rounded-lg ms-2"
                      >
                        Cancel
                      </Button>
                    </SheetClose>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className=" text-white w-full bg-MainRed hover:bg-DarkHoverColor rounded-lg ms-2"
                    >
                      {isSubmitting && (
                        <Spinner color="warning" size="sm" className=" me-2" />
                      )}
                      {editData.edit ? "Update Contact" : "Create Contact"}
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormTool;
