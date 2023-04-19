import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        } 

    body {
        color: #212121;
        background-color: rgba(224, 224, 224);
        display: flex;
        place-items:center;
        min-width:320px;
        min-height:100vh;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    }
`;
