import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import gmaps from "@/constants/google-maps/gmaps.json";
import { CustomModal } from "@/components/custom/modal";
import { GMapsSchema } from "@/constants/google-maps/data";

const GMaps = () => {
  const validatedData = gmaps.data.map((item) => GMapsSchema.parse(item));
  return (
    <Container>
      <CustomModal />
      <DataTable columns={columns} data={validatedData} />
    </Container>
  );
};

export default GMaps;
