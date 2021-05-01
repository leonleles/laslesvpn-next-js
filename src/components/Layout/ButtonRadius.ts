import styled from "styled-components";

export const ButtonRadius = styled.button`
    background: transparent;
    padding: 0.813rem 2.8125rem;
    line-height: 1.1875rem;
    border: 1px solid ${props => props.theme.colors.colorPrimary};
    color: ${props => props.theme.colors.colorPrimary};
    font-weight: 500;
    border-radius: 2.8125rem;
    font-size: 17px;
    transition: 0.2s all;

    &:hover {
        background: ${props => props.theme.colors.colorPrimary};
        color: ${props => props.theme.colors.colorWhite};
    }
`;