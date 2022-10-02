import {StatisticsFeedback, StatisticsValue, RezultContainer } from './Statistics.styled';
import PropTypes from 'prop-types';



export const Statistics = ({ValueGood, ValueNatuer, ValueBad, totalFeedback, percentage  }) => {
    return (
            <>
                    <StatisticsFeedback>
                        <StatisticsValue>Good: {ValueGood}</StatisticsValue>
                        <StatisticsValue>Neutral: {ValueNatuer}</StatisticsValue>
                        <StatisticsValue>Bad: {ValueBad}</StatisticsValue>
                    </StatisticsFeedback>
                    <RezultContainer>
                        <p>Total: {totalFeedback}</p>
                        <p>Positive feedback: {percentage}%</p>
                    </RezultContainer>
            </>
                
        
        
    )
}

Statistics.propTypes = {
    ValueGood: PropTypes.number.isRequired,
    ValueNatuer: PropTypes.number.isRequired,
    ValueBad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
    
}