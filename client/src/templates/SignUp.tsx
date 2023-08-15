import { styled } from "styled-components";
import SignUpForm from "../components/SignUpForm";

const Container = styled.div`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYelMSuCfpqq-NBD5bnC7FzMcLLgsuBxePig&usqp=CAU);
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: #55154a;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(15deg) translateX(50%);
        box-shadow: -2px -2px 5px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>
    <Container>
        <SignUpForm />
    </Container>
</>