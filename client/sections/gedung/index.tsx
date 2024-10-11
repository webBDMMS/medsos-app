import { DataTable } from '@/components/custom/data-table';
import Container from '@/components/custom/layouts/container'
import React from 'react'
import { columns } from './table/columns';
import { data } from '@/constants/secretariat/secretariat.json';

const Sekretariat = () => {
  return (
    <Container>
      <DataTable columns={columns} data={data} />
    </Container>
  );
}

export default Sekretariat