import React from 'react';
import { inject, Observer } from 'mobx-react';

import { Page, PageHeader, PageBody } from '../../components/Page';
import { CitiesBlock } from '../../components/CityCard';
import { SearchBar, City } from './elements';

@inject('appStore')
export class Dashboard extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Dashboard" />
        <PageBody>
          <SearchBar />
          <CitiesBlock>
            <Observer>
              {() => this.props.appStore.cities.map( city => <City key={city} city={city} />)}
            </Observer>
          </CitiesBlock>
        </PageBody>
      </Page>
    );
  }
}

export default Dashboard;
