import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        box-sizing: border-box;

        font-family: "Roboto Slab", serif;

    }

    :root {
        font-size: 62,5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BROWN_BACKGROUND};
    }

    body, input, button {
        outline: none;

    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.JUST_WHITE};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

`;