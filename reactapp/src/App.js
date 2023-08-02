import React, { useState } from 'react';
import {Banner} from './components/UI/Banner/Banner'
// eslint-disable-next-line no-unused-vars
import {Button} from './components/UI/Button/Button'
// eslint-disable-next-line no-unused-vars
import {card} from './components/UI/Card/Card'
import './App.css'
export default function App() {
	const questions = [
		{
			questionText: 'Who is the father of your nation ?',
			answerOptions: [
				{ answerText: 'Mahatma Gandhi', isCorrect: true },
				{ answerText: 'Jawaharlal Nehru', isCorrect: false },
				{ answerText: 'Donald Trump', isCorrect: false },
				{ answerText: 'Barrack Obama', isCorrect: false },
			],
		},
		{
			questionText: 'What color is are the leaves ?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: true },
			],
		},
		{
			questionText: 'What color is the sky ?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},
		{
			questionText: 'What color is the sky ?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  //
  const [showButton, setShowButton]=useState(false);
  const [showQuiz, setShowQuiz]=useState(false);
 
  const[, setQuestionsCorrect]=useState(0);



  const handleQuizButton =() => {
    setShowQuiz(true);
  }

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
      setQuestionsCorrect(score+1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
      
		} else {
			setShowButton(true);
		}
    
	};
  const handleScore =() =>{
    setShowScore(true);
  }
//   const text =()=>{
//     const nextQuestion=currentQuestion+1;
//     if(nextQuestion === questions.length){
//       return "Show Results"
//     }
    
//   }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowButton(false);
  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
          
              {Banner}
            
					You scored {score} out of {questions.length}
          <div><button type="submit" onClick={resetQuiz}>Start Quiz</button></div>
				</div>
			) : (
				<>
        <div><h1>Quizz App</h1></div><br />
        <div>
        {!showQuiz && <button className='rr' onClick ={()=> handleQuizButton()}  >Start Quiz</button>}</div>
        {showQuiz && (<div>
          
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> 
            
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
            <div>
            {showButton && <button id="qq" onClick={() => handleScore()}>Show Results</button>}</div>
            </div>
            
            
					
          </div>)}
				</>
			)}
		</div>
	);
}