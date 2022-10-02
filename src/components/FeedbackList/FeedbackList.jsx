import React from "react";
import PropTypes from 'prop-types';
import { Container, ContainerListBtm, ContainerList } from './FeedbackList.styled';

export const FeedbackList = ({ options, addFeedback }) => {
    
    return (
        <Container>
            {options.map(item => (
                <ContainerList key={item} >
                    <ContainerListBtm type="button" name={item} onClick={addFeedback}>{item}
                    </ContainerListBtm>
                </ContainerList>
            ))}
        </Container>
    )
}

FeedbackList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    addFeedback: PropTypes.func.isRequired,
}