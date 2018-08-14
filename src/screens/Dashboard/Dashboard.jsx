import React from 'react';
import { inject } from 'mobx-react';

import { Page, PageHeader, PageBody } from '../../components/Page';

@inject('appStore')
export class Dashboard extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Task Management" />
        <PageBody>

        </PageBody>
      </Page>
    );
  }
}

export default Dashboard;
