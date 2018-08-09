import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100%;
  margin: 0;
  background: linear-gradient(to right, rgb(253, 116, 108), rgb(255, 144, 104));
`;

const PageHeaderStyled = styled.header`
  margin: 10em;
  box-content: border-box;
  border-bottom:  5px solid rgba(255, 255, 255, .5);
`;

export const PageHeader = ({title}) => {
  return (
    <PageHeaderStyled>
      <h1>
        {title}
      </h1>
    </PageHeaderStyled>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export const PageBody = styled.div`
  margin: 0;
  padding-top: 20px;
`;

export default Page;
