import styled from "styled-components";

export const Item = styled.li`
display: flex;
align-items: center;
gap: 10px;
width: 100%;
padding: 10px;
margin-bottom: 10px;
 background-color: ${(props) => props.theme.colors.pageBackgroundColor};
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);


`;

export const List = styled.ul`
width: 230px;
margin-bottom: 40px;
`;
