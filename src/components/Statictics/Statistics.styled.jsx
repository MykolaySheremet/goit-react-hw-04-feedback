import styled from 'styled-components';

export const StatisticsCard = styled.div`
text-align: center;
`

export const StatisticsTitle = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
`
export const StatisticsValue = styled.span`
`

export const StatisticsFeedback = styled.p`
display: flex;
gap: ${p => p.theme.space[6]}px;
justify-content:center;
font-size: ${p => p.theme.fontSizes.l};
`

export const RezultContainer = styled.div`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};


`