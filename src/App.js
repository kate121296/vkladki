import React, {useState, Fragment} from 'react';
import './App.css';
import Tests from "./Components/Tests";
import Button from "./Components/Button";
import Field from "./Components/Field";

const tests = [
    {
        title:'Find the answer that best completes the analogy:',
        answers: [
            'drawing',
            'writing',
            'stirring',
            'eating',
        ],
        correctAnswer: 3,
    },

    {
        title:'Which of the following can be arranged into a 5-letter English word?',
        answers: [
            'H R G S T',
            'R I L S A',
           ' T O O M T',
          '  W Q R G S'
        ],
        correctAnswer:1,

    },
    {
        title:'What number best completes the analogy:',
        answers: [
           ' 3',
            '7',
            '24',
            '5'
        ],
        correctAnswer:3,

    },

];
function App() {

    const [index, setIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isGameCompleted, setIsGameCompleted] = useState(false);

    const handleIncreaseCorrectAnswers = ()=>{
        setCorrectAnswers(correctAnswers+1)
        console.log(correctAnswers)
    }
    const handleClick = () => {
        if(tests.length -1 === index) {
            setIsGameCompleted(true)
            console.log('hide all the other components and render new component with the amount of correct answers')
            return
        }
        setIndex(index+1)
    }
    return (
        <div className="root">
            {isGameCompleted ? (
                <Field
                    correctAnswers={correctAnswers}
                    totalQuestions={tests.length}
                />
            ) : (
                <Fragment>
                    <Tests
                        tests={tests}
                        selectedQuestionIndex={index}
                        onIncreaseCorrectAnswers={handleIncreaseCorrectAnswers}
                    />
                    <Button
                        onClick={handleClick}
                    />
                </Fragment>
            )}
        </div>
    );
}

export default App;


