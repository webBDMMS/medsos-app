import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columnsView } from "./table/columns-view";
import nomorView from "@/constants/nomor-telphone/view-nomor.json";

const ViewNomor = () => {
  const data = nomorView.data.map((item) => ({
    ...item,
    active_date: new Date(item.active_date),
    non_active_date: item.non_active_date
      ? new Date(item.non_active_date)
      : undefined,
  }));

  return (
    <Container>
      <DataTable columns={columnsView} data={data} />
    </Container>
  );
};

export default ViewNomor;
