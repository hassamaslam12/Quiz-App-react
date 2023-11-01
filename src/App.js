// import Button from './components/Button/Button'
import { useState } from 'react';
import './App.css'

function App() {

    const qusetionData = [
      {question: `what is the full form of html?`,
      options:[ `Hyper text makeup language`,`hyper text modern language`,`hyper text markup language`,`hyper text master language`],
      answer:`hyper text markup language`,      
      },
      {question: `what is the full form of html?`,
      options:[ `Hyper text makeup language`,`hyper text modern language`,`hyper text markup language`,`hyper text master language`],
      answer:`hyper text markup language`,      
      },
      {question: `what is the full form of html?`,
      options:[ `Hyper text makeup language`,`hyper text modern language`,`hyper text markup language`,`hyper text master language`],
      answer:`hyper text markup language`,      
      },
      {question: `what is the full form of html?`,
      options:[ `Hyper text makeup language`,`hyper text modern language`,`hyper text markup language`,`hyper text master language`],
      answer:`hyper text markup language`,      
      },
      {question: `what is the full form of html?`,
      options:[ `Hyper text makeup language`,`hyper text modern language`,`hyper text markup language`,`hyper text master language`],
      answer:`hyper text markup language`,      
      },
     
    ]

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
                <h3>{qusetionData[0].question}</h3>
                 </div>
              {qusetionData[0].options.map((e,i)=> <button key={i} onClick={nextQusetionHandler}>{e}</button>)}
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
