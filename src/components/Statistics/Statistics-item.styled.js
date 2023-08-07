import styled from "styled-components";


export const Item = styled.div`
background-color: ${(props) => {
  switch (props.lebel) {
    case ".pdf":
      return "purple"
    case ".docx":
      return "blue"
    case ".mp3":
      return "red"
    case ".psd":
      return "green"
  }
 }};

 width: 100%;
display: flex;
flex-direction: column;
  align-items: center; 
  padding: 15px;`

export const Percent = styled.span`
font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
     color: ${(props) => props.theme.colors.lightModeColor};
  `;

  export const Label = styled.span`
     color: ${(props) => props.theme.colors.lightModeColor};
  `;
