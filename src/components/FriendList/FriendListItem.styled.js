import styled from "styled-components";


export const FriendAvatar = styled.img`
border: 1px solid ${(props) => props.theme.colors.accentBottonColor};
 background-color: ${(props) => props.theme.colors.lightModeColor};
border-radius: 4px;
`;

export const Name = styled.p`
font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
     color: ${(props) => props.theme.colors.titleSectionColor};

`;

export const StatusFriend = styled.span`
width: 15px;
height: 15px;
    background-color: ${(props) => (props.isOnline ? "green" : "red")};
border-radius: 50%;

`;



