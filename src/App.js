import React, { useState } from "react";
import Day from "./Day";
import "./style.css";

const App = () => {
  const arr = ["월", "화", "수", "목", "금", "토", "일"]
  const ran = Array(7).fill().map(() => Math.floor((Math.random() * 5) + 1));
  //     변수, set함수    useState(초기값)
  const [ave, setState] = useState((ran.reduce((a, b) => a + b, 0) / ran.length).toFixed(1));

  const reset = () => {
    const temp = '0.0';
    setState(temp)
  }

  return (
    <div className="App">
      <div className="Container">
        <h3>내 일주일은?</h3>
        <Day day={arr[0]} rand={ran[0]} />
        <Day day={arr[1]} rand={ran[1]} />
        <Day day={arr[2]} rand={ran[2]} />
        <Day day={arr[3]} rand={ran[3]} />
        <Day day={arr[4]} rand={ran[4]} />
        <Day day={arr[5]} rand={ran[5]} />
        <Day day={arr[6]} rand={ran[6]} />
        <div>
          평균 평점 {ave}
          <button onClick={reset}>Reset</button>
        </div >
      </div>
    </div>
  );
}

export default App;