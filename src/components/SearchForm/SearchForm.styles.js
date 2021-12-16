import styled from "styled-components";

export const Form = styled.form`
    input {
        background-color: #000;
        color: #fff;
        ::placeholder {
            color: #fff;
            opacity: 1;
        }
    }

    .button {
        background-color: #fff;
        color: #000;
        :hover{
            background-color: var(--fontRedEmphasis);
            color: #fff;
            transition: 0.5s;
        }
    }
`;