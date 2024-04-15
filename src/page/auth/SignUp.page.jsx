import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Spinner } from "@nextui-org/react";
import { useSignUpMutation } from "../../store/service/endpoint/auth.endpoint";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AuthGuard from "../../components/guard/Auth.guard";

const SignUp = () => {
  const [registerFun, data] = useSignUpMutation();
  const { toast } = useToast();
  const nav = useNavigate();

  // console.log(data)

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("password"), null],
        "Password must be match above password"
      ),
  });

  const handleSubmit = async (value) => {
    await registerFun(value);
  };

  useEffect(() => {
    if (data?.error) {
      toast({
        title: "Auth Error from Server",
        description: data.error.data.message,
      });
    } else if (data?.data?.success) {
      nav("/home");
    }
  }, [data]);

  return (
    <AuthGuard path="/sign_up">
      <div className=" w-full h-screen mx-auto flex justify-center items-center">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-[25%] max-w-[600] p-5"
          shadow="sm"
        >
          <CardBody>
            <CardTitle className=" dark:text-MainWhite text-MainDarkColor mb-8 text-center">
              Login to your Account
              <Button
                variant="shadow"
                color="danger"
                className="h-1 w-40 flex justify-center mx-auto mt-3"
              ></Button>
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
                          <FaUser className=" absolute right-4 text-MainWhite" />
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
                          <MdEmail className=" absolute right-4 text-MainWhite" />
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
                          <FaLock className=" absolute right-4 text-MainWhite text-sm" />
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
                            value={values.password_confirmation}
                            type="password"
                            id="password_confirmation"
                            placeholder="Confirm Password..."
                            className=" rounded-full"
                          />
                          <FaLock className=" absolute right-4 text-MainWhite text-sm" />
                        </div>

                        <ErrorMessage
                          className=" text-danger font-light text-sm ms-3"
                          name="password_confirmation"
                          component="div"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5 mt-5">
                        <Button
                          color="danger"
                          type="submit"
                          disabled={isSubmitting}
                          className=" text-white w-full hover:bg-DarkHoverColor rounded-full"
                        >
                          {isSubmitting && (
                            <Spinner
                              color="warning"
                              size="sm"
                              className=" me-2"
                            />
                          )}
                          Register
                        </Button>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </CardBody>
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
    </AuthGuard>
  );
};

export default SignUp;
