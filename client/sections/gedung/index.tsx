'use client'
import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import sekretariat from "@/constants/secretariat/secretariat.json";
import { useGetSekretariats } from "@/hooks/react-querry/sekretariat";

const Sekretariat = () => {
  const { data: sekretariats, isLoading, error } = useGetSekretariats();

  console.log(JSON.stringify(sekretariats));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <Container>
      <DataTable columns={columns} data={sekretariat.data} />
    </Container>
  );
};

export default Sekretariat;
