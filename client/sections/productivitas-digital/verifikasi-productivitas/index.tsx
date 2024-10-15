import Container from "@/components/custom/layouts/container";
import React from "react";
import { CustomModal } from "@/components/custom/modal";
import VerfikasiActions from "./mutate-data";

const VerifikasiProductivitas = () => {
  return (
    <Container>
      <CustomModal />
      <VerfikasiActions />
    </Container>
  );
};

export default VerifikasiProductivitas;
