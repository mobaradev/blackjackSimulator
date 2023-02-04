import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: auto;
  margin: 8px 0;
  font-size: 14px;
  cursor: pointer;
  background: none;
  color: #5d5d5d;
  transition: 0.5s;
  font-weight: 600;
  text-align: left;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 10px;
  float: left;
  
  &:hover {
    background-color: silver;
    color: black;
  }
`;

export default Button;