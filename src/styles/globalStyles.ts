import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            line-height: 1.5;
        } 

    body {
        color: #212121;
        background-color: rgba(224, 224, 224);
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }


`;
