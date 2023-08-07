import styled from "styled-components";

export const Wrapper = styled.table`
width: 100%;
background-color: ${(props) => props.theme.colors.pageBackgroundColor};
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ColumnTr = styled.tr`
width: 100%;
display: flex;
align-items: center;
&:nth-child(2n) {
 background-color: ${(props) => props.theme.colors.lightModeColor};
  }
`;
export const ColumnTh = styled.th`
color: ${(props) => props.theme.colors.pageBackgroundColor};
padding-top: 10px;
padding-bottom: 10px;
width: 100%;
display: flex;
flex-direction:column;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colors.accentBottonColor};
  &:last-child {
    border-right: none;
  }
`;


export const ColumnThead = styled.thead`
width: 100%;
 background-color: blue;

`;

