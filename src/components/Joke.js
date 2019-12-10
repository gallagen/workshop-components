import React from "react";

function Joke(props) {
  return (
    <div className="joke">
      <p style={{display: !props.salt.question && "none"}}>Question: {props.salt.question}</p>
      <p style={{color: !props.salt.question && "#888888"}}>Answer: {props.salt.punchLine}</p>
        <hr/>
    </div>
  );
}

export default Joke;
