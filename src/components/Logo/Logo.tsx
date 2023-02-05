import styled from "styled-components";

const Logo = styled.div<{isVisible: boolean}>`
  text-align: center;
  font-size: 36px;
  line-height: 2.5rem;
  margin-bottom: 28px;
  font-weight: bold;
  opacity: ${props => props.isVisible ? "1" : "0"};

  transition: opacity 2s, transform 0.5s;
  cursor: default;

  background-image: linear-gradient(-225deg,
  #d92727 0%,
  black 50%,
  #d92727 100%);
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textClip 3s linear infinite;
}

@keyframes textClip {
  to {
    background-position: 200% center;
  }
`;

export default Logo;