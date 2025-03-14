import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`;

const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    position: absolute;
`;

const Modal = styled.div`
    display: flex;
    background-color: #fff;
    height: 300px;
    width: 400px;
    flex-direction: column;
    opacity: 1;
    gap: 10px;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: 10px;
`;

const Xbutton = styled.button`
    background-color: white;
    border: none;
    margin-left: auto;
    font-size: 20px;
    font-weight: 600;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 23px;
`;

const Description = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
`;

const CloseBtn = styled(IoCloseOutline)`
    width: 20px;
    height: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`;
export {
    CloseBtn,
    Content,
    Contents,
    Container,
    Backdrop,
    Modal,
    Xbutton,
    Title,
    Description,
};
