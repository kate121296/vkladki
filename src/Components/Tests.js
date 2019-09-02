import React from 'react';
import './Tests.css';

function Tests({
    tests=[],
    selectedQuestionIndex=0,
    onIncreaseCorrectAnswers=()=>{}
    }) {
    const handleChange = (index, correctAnswerIndex) => {
       if (index===correctAnswerIndex){
           onIncreaseCorrectAnswers()
       }

    }

    return (
        <div className="text-wrapper">
            <p className="text1">{tests[selectedQuestionIndex].title}</p>
            {tests[selectedQuestionIndex].answers.map((answer,index)=>{
                const correctAnswerIndex =tests[selectedQuestionIndex].correctAnswer;
                return(
                    <div key={index}>
                        <input onChange={()=>handleChange(index, correctAnswerIndex)} name="answer" type="radio" className="answer"  />
                       <span>{answer}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Tests;


