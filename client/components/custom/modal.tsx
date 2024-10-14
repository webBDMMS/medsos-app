'use client';
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialogStore from "@/hooks/use-dialog";
import ViewSekretariat from "@/sections/gedung/view-data";
import ViewPhone from "@/sections/aset-digital/nomor-telepon/mutate-data";
import MedsosActions from "@/sections/aset-digital/medsos/mutate-data";
import GMapsActions from "@/sections/aset-digital/google-maps/mutate-data";

export const CustomModal = () => {
  const { isOpen, closeDialog, dialogType } = useDialogStore();

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="w-auto max-w-[90vw] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="capitalize">{dialogType}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-full min-w-[600px]  max-w-3xl">
          {dialogType === "sekretariat" && <ViewSekretariat />}
          {dialogType === "phone" && <ViewPhone />}
          {dialogType === "edit phone" && <ViewPhone isEdit={true} />}
        </div>
        <div className="w-full h-full min-w-[600px]">
          {dialogType === "medsos" && <MedsosActions />}
          {dialogType === "edit medsos" && <MedsosActions isEdit={true} />}
        </div>
        <div className="w-full h-full min-w-[600px]">
          {dialogType === "gmaps" && <GMapsActions />}
          {dialogType === "edit gmaps" && <GMapsActions isEdit={true} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
