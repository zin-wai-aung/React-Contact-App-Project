import React from 'react'
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <Spinner color="danger" size="md" className=" me-2" />
    </div>
  );
}

export default Loading