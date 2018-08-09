import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';

import { CityCard } from '../../../components/CityCard';

/* @todo Implement Loader */

@inject('appStore')
@observer
export class City extends React.Component {

  @computed
  get cityWeather() {
    if (this.props.appStore.weather.has(this.props.city)) {
      return this.props.appStore.weather.get(this.props.city);
    } else {
      return false;
    }
  }

  cardLicked = () => {
    console.log('clicked');
    this.props.appStore.view.openCity({ name: this.props.city });
  };

  render() {
    const data = this.cityWeather;
    if (!data) {
      return (
        <div style={{ margin: '20px' }}>
          Loading...
        </div>
      );
    }
    return (
      <CityCard
        onClick={this.cardLicked}
        style={{ cursor: 'pointer' }}
        name={data.name}
        temp={data.temp}
        weather={data.weather}
      />
    );
  }
}

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
