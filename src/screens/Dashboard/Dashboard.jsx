import React from 'react';

import { Page, PageHeader, PageBody } from '../../components/Page';

import { ControlLine, Cards } from './elements';

export const Dashboard = () => (
  <Page>
    <PageHeader title="Task Management" />
    <PageBody>
      <ControlLine />
      <Cards />
    </PageBody>
  </Page>
);

export default Dashboard;
