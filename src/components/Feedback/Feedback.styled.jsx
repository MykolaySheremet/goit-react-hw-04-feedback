import styled from 'styled-components';


export const Title = styled.p`
text-align: center;
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.xl};
margin-bottom: ${p => p.theme.space[4]}px;
font-weight: ${p => p.theme.fontWeights.bold};

`
export const Section = styled.section`
padding: ${p => p.theme.space[4]}px;
background-color: violet;
display: flex;
flex-direction: column;
`