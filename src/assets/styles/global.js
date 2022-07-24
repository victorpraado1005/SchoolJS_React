import { createGlobalStyle } from "styled-components";

export default  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');

    *{
      margin: 0;
      padding: 0;
      font-family: Open Sans, Helvetica, Arial, sans-serif;
    }

    body{
      background: ${({ theme }) => theme.colors.background};
      margin: 0 auto
    }
`;
