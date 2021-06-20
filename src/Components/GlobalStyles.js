import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlboalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        // body 아래 요소까지 흰 글씨로 됨.
        color: white;
        //fixed된 헤드 부분과 겹치지 않기 위해
        padding-top: 80px;
    }

`;

export default GlboalStyles;
