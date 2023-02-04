import styled from "styled-components";

const Separator = styled.div<{transparent?: boolean}>`
  margin: 18px 0;
  border: 0;
  border-top: 1px solid silver;
  
  ${props => props.transparent ? "opacity: 0;" : ""}
`;

export default Separator;