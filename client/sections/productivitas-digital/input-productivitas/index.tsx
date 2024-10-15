import Container from "@/components/custom/layouts/container";
import React from "react";
import { CustomModal } from "@/components/custom/modal";
import ProductivitasActions from "./mutate-data";
import { Combobox } from "@/components/ui/combobox";
import { items } from "@/constants/media-sosial/data";

const InputProductivitas = () => {
  return (
    <Container scrollable={false}>
      <CustomModal />
      <Combobox items={items} />
      <div className="rounded-md border h-auto mt-3">
      <ProductivitasActions />
      </div>
    </Container>
  );
};

export default InputProductivitas;
