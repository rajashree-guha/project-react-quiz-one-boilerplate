import React from "react";

class Quz extends React.Component{

 render(){
    return (
      <div>
        <div className="QuizPage">
           <h2>Question</h2>
           <h5>1 of 15</h5>
           <h3>Which is the only mammal that can jump?</h3>
           <div className="grid">
                <button>Dog</button>
                <button>Elephant</button>
                <button>Goat</button>
                <button>Lion</button>
           </div>
           <div className="flex align">
            <button id="blue">Previous</button>
            <button id="green">Next</button>
            <button id="red">Quit</button>
           </div>
        </div>
      </div>
        
      );
}

}

export default Quz