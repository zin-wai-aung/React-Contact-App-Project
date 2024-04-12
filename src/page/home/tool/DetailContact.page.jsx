import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetsinglecontactQuery } from "../../../store/service/endpoint/contact.endpoint";
import Loading from "../../../components/loading/Loading";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  User,
  Image,
  Button,
  Slider,
} from "@nextui-org/react";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import BgPattern from "../../../components/ui/BgPattern";

const DetailContact = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetsinglecontactQuery(id);
  const detailData = data?.contact;
  useEffect(() => {}, []);
  return (
    <div className=" w-full h-full">
      <div className=" flex justify-center items-center">
        {isLoading ? (
          <>
            {" "}
            <Loading />{" "}
          </>
        ) : (
          <>
            {isError ? (
              <> {isError}</>
            ) : (
              <Card
                isBlurred
                className=" dark:text-MainWhite text-MainDarkColor flex justify-center mt-20 items-center border-none bg-background/60 dark:bg-default-100/50 w-[30%]"
                shadow="md"
              >
                <CardHeader className="flex bg-hero-pattern rounded-b rounded-xl">
                  <div className="  relative w-full h-20">
                    <div className=" w-[6rem] absolute top-10 mx-5">
                      <img
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt=""
                        className=" rounded-full border-patternBg border-4"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="p-6 mt-5">
                    <p className=" font-bold text-2xl mb-10 text-MainRed shadow">
                      {" "}
                      {detailData.name}{" "}
                    </p>
                    <div className=" flex items-center justify-between">
                      <div className=" flex flex-col space-y-5">
                        <div className=" flex items-center">
                          <MdPhoneInTalk />
                          <p className=" ms-2"> Phone</p>
                        </div>

                        <div className=" flex items-center">
                          <MdEmail />
                          <p className=" ms-2"> Email</p>
                        </div>

                        <div className=" flex items-center">
                          <TiLocation />
                          <p className=" ms-2"> Address</p>
                        </div>
                      </div>

                      <div className=" flex flex-col justify-start space-y-5">
                        <p> {detailData.phone} </p>
                        <p> {detailData.email} </p>
                        <p> {detailData.address} </p>
                      </div>
                    </div>
                  </div>

                  <Divider className=" mb-5" />
                </CardBody>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailContact;
