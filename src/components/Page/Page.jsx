import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;
  background: linear-gradient(to right, rgb(253, 116, 108), rgb(255, 144, 104));
  display: flex;
  flex-direction: column;
`;

const PageHeaderStyled = styled.header`
  padding-left: 20px;
  box-sizing: border-box;
  border-bottom: 5px solid rgba(255, 255, 255, .5);
  max-height: 80px;
`;

export const PageHeader = ({ title }) => (
  <PageHeaderStyled>
    <h1>
      {title}
    </h1>
  </PageHeaderStyled>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export const PageBody = styled.div`
  margin: 0;
  flex: 1;
`;

export default Page;
