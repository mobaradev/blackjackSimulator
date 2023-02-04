import GithubLogoImage from "../../images/githubLogo.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 4px;
  margin-right: 4px;
`;

const A = styled.a`
  color: black;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
`;

function LogoAuthor(props: any) {
    return(
        <Container style={props.style ? props.style : null}>
            <div>
                <Img className="github-logo-img" src={GithubLogoImage} alt="Github logo" height="18" />
                <A href="https://github.com/mobaradev" target="_blank">mobaradev</A>
            </div>
        </Container>
    )
}

export default LogoAuthor;