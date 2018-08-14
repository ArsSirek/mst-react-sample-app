import styled from 'styled-components';

export const CardsBlock = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
`;

export const CardStyled = styled.div`
  width: 80px;
  min-height:200px;
  margin: 10px;
  padding: 5px;
  background: white;
  display: inline-block;
`;

export const CardHeader = styled.div`
  min-height:20px;
`;

export const CardBody = styled.div`
  padding-top:10px;
  min-height:20px;
  
  * {
    max-width: calc( 100% - 10px);
  }
`;

export default CardStyled;
