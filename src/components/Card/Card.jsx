import styled from 'styled-components';

export const CardsBlock = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
`;

export const CardStyled = styled.div`
  width: 200px;
  min-height:100px;
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
  
  > *, input {
    max-width: 180px;
    width: 180px;
    box-sizing: border-box;
    margin: 5px;
  }
  
  > .react-autosuggest__container {
    margin: 0;
  }
`;

export default CardStyled;
