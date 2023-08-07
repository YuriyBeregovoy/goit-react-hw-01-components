import styled from "styled-components";

export const ColumnTd = styled.td`  
width: 100%;
display: flex;
flex-direction:column;
  align-items: center;
   border-right: 1px solid ${(props) => props.theme.colors.accentBottonColor};
   &:last-child {
    border-right: none;
  }

  font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.01em;
    padding-top: 10px;
    padding-bottom: 10px;
`; 