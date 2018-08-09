import React from 'react';
import { inject, observer } from 'mobx-react';

import { Page, PageHeader, PageBody } from '../../components/Page';
import { SearchBar } from './elements';

@inject('store')
@observer
export default class Dashboard extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Dashboard" />
        <PageBody>
          <SearchBar />
        </PageBody>
      </Page>
    );
  }
}
