import "./App.css";
import { useState, useEffect } from "react";
import React from "react";

export default function App() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
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
    <div className="main-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="timer-display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="button-container">
        {running ? (
          <button
            className="button button-stop"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            className="button button-start"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          className="button button-reset"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
