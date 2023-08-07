import styled from "styled-components";

export const List = styled.ul`
 display: flex;
 justify-content:space-between;
 `;


export const Stats = styled.section`
display: flex;
flex-direction:column;
  align-items: center;
width: 100%;
margin-bottom: 40px;
 background-color: ${(props) => props.theme.colors.pageBackgroundColor};
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
`;

export const Title = styled.h2`
padding: 20px;
text-transform: uppercase;
color: ${(props) => props.theme.colors.titleSectionColor};


`;