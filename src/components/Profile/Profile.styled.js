import styled from "styled-components";


export const UserAvatar = styled.img`
    width: 100px;
    border-radius: 100%;
 background-color: ${(props) => props.theme.colors.lightModeColor};
margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  padding: 20px;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.pageBackgroundColor};
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border-radius: 0px 0px 4px 4px;
`;


export const Stats = styled.ul`
display: flex;
justify-content:space-between;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction:column;
  align-items: center;
  padding: 10px;
    background-color: ${(props) => props.theme.colors.lightModeColor};
border: 1px solid ${(props) => props.theme.colors.accentBottonColor};
`;


export const Name = styled.p`
font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
`;

export const Quantity = styled.span`
font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.01em;
`;