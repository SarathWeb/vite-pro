

import "../components/quiz.css";

import React, { useState } from "react";

function Quizapp() {
  const questions = [
    {
      questionText: "Who is Prime Minister of India?",
      answerOptions: [
        { answerText: "Vijay Rupani", isCorrect: false },
        { answerText: "Manmohan singh", isCorrect: false },
        { answerText: "Narendra Modi", isCorrect: true },
        { answerText: "Deep Patel", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tata?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false }
      ]
    },
    {
      questionText: "who is richest person in the world?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Warren Buffett", isCorrect: false }
      ]
    },
    {
      questionText: "how many countries in the world?",
      answerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true }
      ]
    }
  ];

  const [currentposition,setIscurrentposition] = useState(0);
  const [curques,setIscurques] = useState(1);

  const [score,setIsscore] = useState(0);

  const [boolean,setIsboolean] = useState(false);

//console.log(questions.length,'lemn',currentposition);

  function handlebtn(isCorrect){

   

    if(currentposition + 1  < questions.length){

      setIscurrentposition(currentposition + 1); // Check Proper Index Checking;
     
    }else{
      setIsboolean(true);
      
    }

  

    setIscurques((prev)=> prev + 1)
    
    if(isCorrect == true){
      setIsscore((prev)=> prev + 1);
    }
  
  }

  


     return(

        <>

        {

            boolean  ? (
                <div>
                You Scored {score}  out of {questions.length}
                </div>
            ) : (
                <div className="score-section">
                <div>
               <span>Questions{curques} {questions.length}</span> 
               <span>{questions[currentposition].questionText}</span>
                </div>
                <div className="question-text">
                    {
                        questions[currentposition].answerOptions.map((query)=>{
                           return <button key={query.answerText} onClick={()=>handlebtn(query.isCorrect)}>{query.answerText}</button>
                        })
                    }
                </div>
                </div>
            ) 
        }

</>

     )


 
}

export default Quizapp;
