import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Loader2 } from "lucide-react";
import { useSignUpMutation } from "../../store/service/endpoint/auth.endpoint";


const SignUp = () => {

  const [registerFun, data] = useSignUpMutation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(4, "Name must be at least 4 character"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("password"), null],
        "Password must be match above password"
      ),
  });

  const handleSubmit = async (value) => {
    console.log(value);
    await registerFun(value)

  };
  return (
    <div className=" w-3/5 mx-auto flex justify-center items-center h-full ">
      <Card className="w-[350px] border-none shadow-md bg-secondary py-3">
        <CardHeader>
          <CardTitle className=" text-basic">Create your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <>
                <Form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <div className=" relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          type="text"
                          id="name"
                          placeholder="Username..."
                          className=" rounded-full"
                        />
                        <FaUser className=" absolute right-4 text-basic" />
                      </div>
                      <ErrorMessage
                        className=" text-danger font-light text-sm ms-3"
                        name="name"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <div className="relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          type="email"
                          id="email"
                          placeholder="Email..."
                          className=" rounded-full"
                        />
                        <MdEmail className=" absolute right-4 text-basic" />
                      </div>
                      <ErrorMessage
                        className=" text-danger font-light text-sm ms-3"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <div className="relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          type="password"
                          id="password"
                          placeholder="Create Password..."
                          className=" rounded-full"
                        />
                        <FaLock className=" absolute right-4 text-basic text-sm" />
                      </div>
                      <ErrorMessage
                        className=" text-danger font-light text-sm ms-3"
                        name="password"
                        component="p"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <div className="relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirm_password}
                          type="password"
                          id="confirm_password"
                          placeholder="Confirm Password..."
                          className=" rounded-full"
                        />
                        <FaLock className=" absolute right-4 text-basic text-sm" />
                      </div>

                      <ErrorMessage
                        className=" text-danger font-light text-sm ms-3"
                        name="confirm_password"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-5">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className=" bg-basic w-full hover:bg-hoverColor rounded-full"
                      >
                        {isSubmitting && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}

                        Register
                      </Button>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
        <CardFooter className="flex flex-col">
          <CardDescription>
            Already have an account?
            <span className=" underline text-basic font-bold">
              {" "}
              <Link to={"/"}> Login </Link>{" "}
            </span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
