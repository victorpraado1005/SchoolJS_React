import styled from "styled-components";

export const Container = styled.header`
    background: #3498db;
    padding: 16px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    span{
        color: white;
        font-size: 30px;
        font-family: 'Schoolbell', cursive;
        font-weight: bold;
    }
`;
