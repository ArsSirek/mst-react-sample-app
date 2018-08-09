import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { Page, PageHeader, PageBody } from '../../components/Page';

@inject('appStore')
export class City extends React.Component {

  backClicked = () => {
    this.props.appStore.view.openDashboard();
  };

  render() {
    return (
        <Page>
          <PageHeader title={this.props.name} />
          <PageBody>
            {
              this.props.name
            }
            <button type="submit" onClick={this.backClicked}> Back </button>
          </PageBody>
        </Page>
    );
  }
}

City.propTypes = {
  name: PropTypes.string.isRequired,
};

export default City;
