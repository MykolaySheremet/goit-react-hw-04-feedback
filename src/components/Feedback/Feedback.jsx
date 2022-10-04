import React from "react";
import { FeedbackList } from "../FeedbackList/FeedbackList";
import { Title, Section} from './Feedback.styled';
import { Statistics } from '../Statictics/Statistics';
import { StatisticsTitle, StatisticsCard } from '../Statictics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';
import { useState } from "react";


export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const state = { good, bad, neutral }
    
    // console.log(state);

    const handleIncrement = (e) => {

        let curentfeedback = e.currentTarget.name;

        switch (curentfeedback) {
            case "good":
                setGood((prevGood) => prevGood + 1 )
            break;
            case "neutral":
                setNeutral((prevNeutral) => prevNeutral + 1);
            break;
            case "bad":
                setBad((prevBad) => prevBad + 1);
            break;
            default:
                return;
    }
    // console.log(curentfeedback);

}

    const countTotalFeedback = () => {
        let countTotal = good + neutral + bad;
        return countTotal;
    }
    
    // console.log(countTotalFeedback());
    
    const countPositiveFeedbackPercentage = () =>{
        let percentageGood = Math.round(good / countTotalFeedback() * 100);
        
        return percentageGood;
    }

    return (
        <Section>
                <Title> Please leave feedback </Title>
                <FeedbackList 
                    options={Object.keys(state)}
                    addFeedback ={handleIncrement}
                ></FeedbackList>

            <StatisticsCard>
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    {countTotalFeedback() === 0
                        ? <Notification message="There is no feedback"></Notification>
                        : <Statistics
                            ValueGood={good}
                            ValueNatuer={neutral}
                            ValueBad={bad}
                            totalFeedback={countTotalFeedback()}
                            percentage={countPositiveFeedbackPercentage()}>
                        </Statistics>}
                
            </StatisticsCard>
            
        </Section>
    )
}

// export class Feedback extends React.Component{


    
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     // handleIncrement = (e) => {

//     //     let curentfeedback = e.currentTarget.name;
        
//     //     this.setState((prevState) => ({ [curentfeedback]: prevState[curentfeedback] + 1 }))
//     // }

//     // countTotalFeedback=() => {
//     //     let countTotal = this.state.good + this.state.neutral + this.state.bad;
//     //     return countTotal;
    
//     // }

//     // countPositiveFeedbackPercentage = () =>{
//     //     let percentageGood = Math.round(this.state.good / this.countTotalFeedback() * 100);
        
//     //     return percentageGood;
//     // }



    
    
//     // render() {
//     //     let totalFeedback = this.countTotalFeedback();
//     //     return (
//     //     <Section>
//     //             <Title> Please leave feedback </Title>
//     //             <FeedbackList 
//     //                 options ={Object.keys(this.state)}
//     //                 addFeedback ={this.handleIncrement}
//     //             ></FeedbackList>

//     //             <StatisticsCard>
//     //                 <StatisticsTitle>Statistics</StatisticsTitle>
//     //                 {totalFeedback === 0
//     //                     ? <Notification message="There is no feedback"></Notification>
//     //                     : <Statistics
//     //                         ValueGood={this.state.good}
//     //                         ValueNatuer={this.state.neutral}
//     //                         ValueBad={this.state.bad}
//     //                         totalFeedback={this.countTotalFeedback()}
//     //                         percentage={this.countPositiveFeedbackPercentage()}>
//     //                     </Statistics>}
                
//     //             </StatisticsCard>
                        
                
//     //     </Section>
//     // )}
// }

