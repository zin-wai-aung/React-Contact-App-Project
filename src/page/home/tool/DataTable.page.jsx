import React, { useEffect } from 'react'
import DataPage from './Data.page';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTablePage = ({ datalists, handleEdit }) => {
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=" text-MainRed font-bold uppercase text-nowrap">
            Name
          </TableHead>
          <TableHead className=" text-MainRed font-bold uppercase text-nowrap text-right">
            Phone
          </TableHead>
          <TableHead className=" text-MainRed font-bold uppercase text-nowrap">
            Email
          </TableHead>
          <TableHead className=" text-MainRed font-bold uppercase text-nowrap">
            Address
          </TableHead>
          <TableHead className=" text-MainRed font-bold uppercase text-nowrap text-right">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datalists.map((data) => (
          <TableRow key={data.id} className=" cursor-pointer">
            <DataPage singleData={data} handleEdit={handleEdit} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTablePage