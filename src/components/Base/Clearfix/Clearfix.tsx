import styled from "styled-components";

const Clearfix = styled.div`
  display: table;
  clear: both;
  content: '';
  
  &::before, &::after {
    display: table;
    clear: both;
    content: '';
  }
`;

export default Clearfix;