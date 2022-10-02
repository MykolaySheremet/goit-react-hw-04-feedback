import React from "react";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from '../Statictics/Statistics';
import { StatisticsTitle, StatisticsCard } from '../Statictics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends React.Component{
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = (e) => {

        let curentfeedback = e.currentTarget.name;
        
        this.setState((prevState) => ({ [curentfeedback]: prevState[curentfeedback] + 1 }))
    }

    countTotalFeedback=() => {
        let countTotal = this.state.good + this.state.neutral + this.state.bad;
        return countTotal;
    
    }

    countPositiveFeedbackPercentage = () =>{
        let percentageGood = Math.round(this.state.good / this.countTotalFeedback() * 100);
        
        return percentageGood;
    }



    
    
    render() {
        let totalFeedback = this.countTotalFeedback();
        return (
        <Section>
                <Title> Please leave feedback </Title>
                <FeedbackList 
                    options ={Object.keys(this.state)}
                    addFeedback ={this.handleIncrement}
                ></FeedbackList>

                <StatisticsCard>
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    {totalFeedback === 0
                        ? <Notification message="There is no feedback"></Notification>
                        : <Statistics
                            ValueGood={this.state.good}
                            ValueNatuer={this.state.neutral}
                            ValueBad={this.state.bad}
                            totalFeedback={this.countTotalFeedback()}
                            percentage={this.countPositiveFeedbackPercentage()}>
                        </Statistics>}
                
                </StatisticsCard>
                        
                
        </Section>
    )}
}

