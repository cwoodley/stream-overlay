import { injectGlobal } from "styled-components"

const BigNoodle = require("../fonts/bignoodletoo.woff")

export const styles = injectGlobal`
  * {margin: 0; padding: 0; box-sizing: border-box;}
  
  @font-face {
    font-family: "Overwatch";
    src: url(${BigNoodle}) format("woff");
  }

  body {
    color: #fff;
    padding: 0;
    margin: 0;
    font-family: "Lato", sans-serif;
    letter-spacing: 1px;
  }

  h2 {
    font-family: "Overwatch";
    font-weight: normal;
    letter-spacing: 0;
  }
`
