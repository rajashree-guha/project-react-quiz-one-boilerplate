import React from "react";

class Result extends React.Component{

 render(){
    return (
       <div className="ResultPage">
        <h2>Result</h2>
        <div className="Page">
            <h3>You need more practise!</h3>
            <h1>Your Score is 20%</h1>
            <div className="flex around">
                <div >
                    <h4>Total number of questions</h4>
                    <h4>Numbers of attempted questions</h4>
                    <h4>Numbers of correct answers</h4>
                    <h4>Number of wrong answer</h4>
                    
                </div>
                <div>
                    <p>15</p>
                    <p>9</p>
                    <p>3</p>
                    <p>6</p>
                </div>
            </div>
        </div>
            <div className="flex  btnClick">
                <button id="blueBorder">Play Again</button>
                <button id="greenBorder">Back to home</button>
            </div>
       </div>
      );
}

}

export default Result