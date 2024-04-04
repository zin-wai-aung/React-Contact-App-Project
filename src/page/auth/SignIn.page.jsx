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
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSignInMutation } from "../../store/service/endpoint/auth.endpoint";
import { Loader2 } from "lucide-react";


const SignInPage = () => {

  const [loginFun, data] = useSignInMutation();

  console.log(loginFun,data)

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

  const handleSubmit = async (value) => {
    console.log(value);
    await loginFun(value)
  };
  return (
    <div className=" w-3/5 mx-auto flex justify-center items-center h-full">
      <Card className="w-[350px] border-none  shadow-md bg-secondary py-3">
        <CardHeader>
          <CardTitle className=" text-basic">Login to your Account</CardTitle>
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
                      <div className="relative flex justify-between items-center rounded-full">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          id="email"
                          placeholder="Email..."
                          className=" rounded-full"
                        />
                        <MdEmail className=" absolute right-4 text-basic text-sm" />
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
                        <FaLock className=" absolute right-4 text-basic text-sm" />
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
                        className=" bg-basic w-full hover:bg-hoverColor rounded-full"
                      >
                        {isSubmitting && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Login
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
