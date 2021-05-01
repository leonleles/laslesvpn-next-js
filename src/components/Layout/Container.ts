import styled from "styled-components";

type ContainerProps = {
  between?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  ${props => props.between ? 'display: flex;' : ''}
  ${props => props.between ? 'justify-content: space-between' : ''}
`