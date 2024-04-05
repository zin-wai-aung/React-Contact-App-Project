import React from "react";
import { Link } from "react-router-dom";

import { CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Card, CardBody } from "@nextui-org/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSignInMutation } from "../../store/service/endpoint/auth.endpoint";
import { Spinner } from "@nextui-org/react";

const SignInPage = () => {
  const [loginFun, data] = useSignInMutation();

  console.log(loginFun, data);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleSubmit = async (value, action) => {
    await loginFun(value);
    action.reset();
  };
  return (
    <div className=" w-full mx-auto flex justify-center items-center h-full">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-[25%] max-w-[600] p-5"
        shadow="sm"
      >
        <CardBody>
          <CardTitle className=" mb-8 text-center dark:text-MainWhite text-MainDarkColor">
            Login to your Account
            <div className="h-1 w-40 bg-MainRed flex justify-center mx-auto mt-3"></div>
          </CardTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <>
                <Form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5 text-MainWhite">
                      <div className="relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          id="email"
                          placeholder="Email..."
                          className=" rounded-full"
                        />
                        <MdEmail className=" absolute right-4 text-MainWhite text-sm" />
                      </div>

                      <ErrorMessage
                        className=" text-danger font-light text-sm"
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
                          placeholder="Password..."
                          className=" rounded-full"
                        />
                        <FaLock className=" absolute right-4 text-MainWhite text-sm" />
                      </div>
                      <ErrorMessage
                        className=" text-danger font-light text-sm"
                        name="password"
                        component="p"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-5">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className=" bg-MainRed text-white w-full hover:bg-DarkHoverColor rounded-full"
                      >
                        {isSubmitting && (
                          <Spinner
                            color="warning"
                            size="sm"
                            className=" me-2"
                          />
                        )}
                        Login
                      </Button>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </CardBody>
        <CardFooter className="flex flex-col">
          <CardDescription className="">
            Don't have an account?
            <span className=" underline text-basic font-bold">
              {" "}
              <Link to={"/sign_up"}> Register </Link>{" "}
            </span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
