import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import nomor from "@/constants/nomor-telphone/nomor.json";
import { CustomModal } from "@/components/custom/modal";

const NomorTelepon = () => {
  return (
    <Container>
      <CustomModal />
      <DataTable columns={columns} data={nomor.data} />
    </Container>
  );
};

export default NomorTelepon;
