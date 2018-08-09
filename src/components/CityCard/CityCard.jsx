import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const CitiesBlock = styled.div`
  display:flex;
  padding: 1em;
  justify-content: space-around;
   & > div {
    display: inline-block;
    flex:1;
   }
`;

export const Card = styled.div`
  border:  2px solid rgba(255, 255, 255, .5);
  background: white;
  font-size: 24px;
  margin: 1em;

  & div {
    padding: 1em;
    font-size: 16px;
  }
  span {
    padding-top: 0.2em;
    border-top: 1px solid black;
  }
`;

export const CityCard = (props) => {
  const { name, weather, temp } = props;
  return (
    <Card {...props}>
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
  temp: PropTypes.number.isRequired,

};


export default CityCard;

/*
* temp
* pressure
*/
