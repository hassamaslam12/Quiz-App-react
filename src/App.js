// import Button from './components/Button/Button'
import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button'

function App() {

    const qusetionData = [
    
      {
        question: "What is the Full Form Of HTML",
        options: [
          "HyperText Makeup Language",
          "HyperText Markup Language",
          "HyperText Markup Lame",
          "HyperTate Markup Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        question: "What does CSS stands for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
      },
      {
        question: "What does PHP stands for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
        ],
      },
      {
        question: "What does SQL stands for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
        ],
      },
      {
        question: "What year was JavaScript launched?",
        answer: "1995",
        options: ["1996", "1995", "1994", "None of the Above"],
      },
    ];  

    const [count,setCount] = useState(0);
    const [score,setScore] = useState(0);

  

    const nextQusetionHandler =(e)=>{
      if (e.target.innerHTML === qusetionData[count].answer) {
        setScore(prev=>prev+1)
      }
        // let n = count + 1;
        // if(n < qusetionData.length){
        //   setCount(n)
        // }
        // else{
        //   alert("done")
        // }
        
        setCount(prev=>prev+1)
      }
      // console.log(count)

  return (
    <div className='centre'>
      <div className='headingDiv'>

          <h1>Quiz App</h1>
      </div>
         
      <div className='container'> 
            {
              count<qusetionData.length ? 
              <>
                 <div className='questionCard'>
                  <p>
                    
                  Question {count+1}/{qusetionData.length}
                  </p>
                <h3>{qusetionData[count].question}</h3>
                 </div>
              {qusetionData[count].options.map((e,i)=> <button key={i} onClick={nextQusetionHandler}>{e}</button>)}
            <div>
            </div>
              </>
            
            :<div className='questionCard'>
              <div>
              <p>

              Score: {`${score}/${qusetionData.length}`}
              </p>

              </div>

              <div>
                <p>

                Percentage: {(score*100)/qusetionData.length}%
                </p>
                </div>
            </div>
            }
            </div>
           
    </div>
  );
}

export default App;
