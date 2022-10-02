import styled from 'styled-components';

export const Container = styled.ul`
display: flex;
gap: 10px;
margin-left: auto;
margin-right: auto;
margin-bottom: ${p=>p.theme.space[4]}px;
`

export const ContainerList = styled.li`

`

export const ContainerListBtm = styled.button`
cursor: pointer;
font-size: ${p => p.theme.fontSizes.l};
border-radius: ${p => p.theme.radii.normal};
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.accent};
`