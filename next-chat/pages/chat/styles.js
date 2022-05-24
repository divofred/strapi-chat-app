import styled from 'styled-components';
import { Button } from 'antd';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    background: #f2f2f2;
    padding: 40px;
    margin: 100px auto;
    max-width: 60vw;
    box-shadow: 5px 10px 18px #888888;
    height: 80vh;
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    border-radius: 8px;
    height: 60%;
    justify-content: space-between;
`;

export const ChatBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
`;

export const StyledButton = styled(Button)`
    height: 45px;
    background: #2979FF;
    transition: 0.5s;
`
export const SendIcon = styled.div`
    color: #fff;
    font-size: 20px;
    :hover {
        color:#2979FF;
        background: #fff;
    }
    :focus {
        outline: none;
    }
`;