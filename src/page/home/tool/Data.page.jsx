import React, { useEffect } from "react";
import { TableCell } from "@/components/ui/table";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useDeletecontactMutation } from "../../../store/service/endpoint/contact.endpoint";
import Swal from "sweetalert2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate, Link } from "react-router-dom";

const DataPage = ({ singleData }) => {
  const nav = useNavigate();
  const [deleteFun, { data, isError, isLoading }] = useDeletecontactMutation();
  let uniqueId = singleData.id;

  useEffect(() => {
    // console.log(data);
  }, [data, isError, isLoading]);

  const confirmDel = () => {
    deleteFun(uniqueId);

    // toast({
    //   color: "#94A3B8",
    //   description: "Successfully have been deleted.",
    // });

    Swal.fire({
      color: "#3F3F46",
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      confirmButtonColor: "#C20E4D",
    });
  };

  return (
    <>
      <TableCell className="font-medium text-nowrap">
       {singleData.name}
      </TableCell>
      <TableCell className=" text-nowrap text-right">
        {singleData.phone}
      </TableCell>
      <TableCell className=" text-nowrap">{singleData.email}</TableCell>
      <TableCell className=" text-nowrap">{singleData.address}</TableCell>
      <TableCell className=" text-nowrap">
        <div className=" flex items-center gap-3 text-lg justify-end">
          <div className=" flex justify-center items-center bg-MainWhite text-[#7EA1FF] hover:text-MainWhite w-10 h-10 p-2 rounded-full bg-opacity-15">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link to={`contact/${singleData.id}`}>
                  <TiInfoLarge className=" text-2xl" />
                  
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Detail Contact</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className=" flex justify-center items-center bg-MainWhite text-[#FFC94A] hover:text-MainWhite w-10 h-10 p-2 rounded-full bg-opacity-15">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <FaUserEdit />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit Contact</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className=" flex justify-center items-center bg-MainWhite  text-[#F7418F] hover:text-MainWhite w-10 h-10 p-2 rounded-full bg-opacity-15">
            <AlertDialog>
              <AlertDialogTrigger>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdDelete />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete Contact</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </AlertDialogTrigger>
              <AlertDialogContent className=" bg-MainWhite border-none">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure want to delete?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className=" bg-MainDarkColor bg-opacity-20 hover:bg-[#64758b] border-none">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className=" bg-MainRed hover:bg-DarkHoverColor">
                    <button onClick={confirmDel}>Delete</button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </TableCell>
      
    </>
  );
};

export default DataPage;
