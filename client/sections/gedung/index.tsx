import { DataTable } from '@/components/custom/data-table';
import Container from '@/components/custom/layouts/container'
import React from 'react'
import { columns } from './table/columns';
import sekretariat from '@/constants/secretariat/secretariat.json';
import { CustomModal } from '@/components/custom/modal';

const Sekretariat = () => {
  return (
    <Container>
      <CustomModal />
      <DataTable columns={columns} data={sekretariat.data} />
    </Container>
  );
}

export default Sekretariat