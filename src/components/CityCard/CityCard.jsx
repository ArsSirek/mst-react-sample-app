import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Card = styled.div`
  background: red;
`;

const CityCard = (props) => {
  const { name, weather, temp } = props;
  return (
    <Card>
      <div>
        {name}
      </div>
      <div>
        <span>
          weather -
          {weather}
        </span>
        <span>
          temp -
          {temp}
        </span>
      </div>
    </Card>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,

};


export default CityCard;

/*
* temp
* pressure
*/
