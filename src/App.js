import React from 'react';
import Joke from './components/Joke' 

function App() {
  return (
    <div className="joke-list">

      <Joke 
        salt={{
          question: "Что за надпись на деньгах - Билет банка России?",
          punchLine: "Мы куда-то едем или летим?"
        }}
      />

      <Joke 
        salt={{
          question: "", 
          punchLine: "Вчера была согласна на все, но все так никто и не предложил." 
        }}
      />

      <Joke 
        salt={{
          question: "- Ты полная дура!",
          punchLine: "- Нет, милый, стройная!"
        }}
      />

      <Joke 
        salt={{
          question: "", 
          punchLine: "Верните мне прошлое - там было такое замечательное будущее."
        }}
      />

      <Joke 
        salt={{
          question: "- Кошелек или жизнь?",
          punchLine: "- Мне кажется, это не лучший слоган для больницы." 
        }}
      />

        </div>
  );
}

export default App;
