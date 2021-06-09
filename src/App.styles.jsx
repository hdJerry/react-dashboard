import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: #E5E5E5;

`;

export const MainContents = styled.div`
    background-color: #E5E5E5;
    flex: 1 1 100%;
    // padding: 40px 30px;
    height: 100vh;
    overflow-y: auto;

     &::-webkit-scrollbar {
        width: 6px;
        background-color: #046af326;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFF;
     }
`;
