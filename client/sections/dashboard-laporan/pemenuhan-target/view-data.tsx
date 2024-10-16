import React, { useState } from "react";
import { ChartComponents } from "./chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/custom/data-table";
import { columnsAchieved } from "./table/columns";
import achieved from "@/constants/dashboard-laporan/pemenuhan-target/achived.json";
import notAchieved from "@/constants/dashboard-laporan/pemenuhan-target/not-achived.json";

const ViewData = () => {
  const [activeTab, setActiveTab] = useState("achieved");

  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="col-span-2 flex flex-col gap-3">
        <p className="text-base underline">Resume:</p>
        <p className="text-sm">
          Total Unit Bisnis Google Maps:{" "}
          <span className="text-primary underline">512/512</span>
        </p>
        <p className="text-base underline mt-5">
          Persentase Ketercapaian Target:
        </p>
        <div>
          <ChartComponents />
        </div>
      </div>
      <div className="col-span-5 flex justify-between relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="achieved">Target Tercapai</TabsTrigger>
            <TabsTrigger value="notAchieved">Target Tidak Tercapai</TabsTrigger>
          </TabsList>
          <TabsContent value="achieved" className="w-full">
            <DataTable columns={columnsAchieved} data={achieved.data} />
          </TabsContent>
          <TabsContent value="notAchieved">
            <DataTable columns={columnsAchieved} data={notAchieved.data} />
          </TabsContent>
        </Tabs>
        <p className="text-base underline text-primary truncate w-auto absolute right-0 cursor-pointer">
          Lihat data lengkap (1 tahun)
        </p>
      </div>
    </div>
  );
};

export default ViewData;