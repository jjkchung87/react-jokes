import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

// class Joke extends Component {
//   render() {
//     const { id, vote, votes, text } = this.props;

//     return (
//       <div className="Joke">
//         <div className="Joke-votearea">
//           <button onClick={evt => vote(id, +1)}>
//             <i className="fas fa-thumbs-up" />
//           </button>

//           <button onClick={evt => vote(id, -1)}>
//             <i className="fas fa-thumbs-down" />
//           </button>

//           {votes}
//         </div>

//         <div className="Joke-text">{text}</div>
//       </div>
//     );
//   }
// }


const Joke = ({id, vote, votes, text, locked, lock}) => {

  if(locked) {
    return (
      <div className="Joke">
               <div className="Joke-votearea">
                <button onClick={()=>{lock(id)}}>
                  un-lock
                </button>
                 <button onClick={evt => vote(id, +1)}>
                   <i className="fas fa-thumbs-up" />
                 </button>
      
                 <button onClick={evt => vote(id, -1)}>
                   <i className="fas fa-thumbs-down" />
                 </button>
      
                 {votes}
               </div>
      
               <div className="Joke-text">{text}</div>
             </div>
    )
  } else {
    return (
      <div className="Joke">
               <div className="Joke-votearea">
               <button onClick={()=>{lock(id)}}>
                  lock
                </button>
                 <button onClick={evt => vote(id, +1)}>
                   <i className="fas fa-thumbs-up" />
                 </button>
      
                 <button onClick={evt => vote(id, -1)}>
                   <i className="fas fa-thumbs-down" />
                 </button>
      
                 {votes}
               </div>
      
               <div className="Joke-text">{text}</div>
             </div>
    )
  }

  
}

export default Joke;
