import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  html{
    font-size: 15px;
    --white: #dfdfdf;
  }

  body{
    margin: 0;
    background: #0d202b;
    font-size: 20px;
    color: var(--white);
  }
  a{
   text-decoration: none;
   color: var(--white);
  }
  button{
    border: none;
  }
`;

const InnerStyles = styled.div``;
export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>
        {children}
      </InnerStyles>
    </div>
  )
}