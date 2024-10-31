import { useEffect, useState, usestate } from "react";
import "./App.css";

function App() {
  const [time, setTime] = usestate(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)}</span>
        {/*The time is calculated by dividing the time by the number of miliseconds for each minute(1 minute is 60000ms) with the remainder operator %60 restricting it  between 0-59*/}
        <span>{"0" + Math.floor((time / 1000) % 60)}</span>
        {/*This calculates the seconds 1s = 1000ms*/}
        <span>{"0" + ((time / 10) % 100)}</span>
        {/*time/10 gives centiseconds making the stop watch give 2-digit precion for ms 1cs=10ms */}
      </div>
      <div>
        <buttons
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </buttons>
        <buttons
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </buttons>
        <buttons
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </buttons>
      </div>
    </div>
  );
}

export default App;
