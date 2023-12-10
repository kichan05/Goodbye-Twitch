import './App.css';
import {useEffect, useState, useRef} from "react";
import moment from 'moment';
import { DateTime } from 'luxon'

const Number = ({number, row, currentTime}) => {
  const element = useRef()
  const [top, setTop] = useState(62 * number * -1)

  useEffect(() => {
    setTop(element.current.offsetHeight * number * -1)
  }, [number, currentTime])

  return (
    <div
      className={`number-wrap ${number}`}
      style={{transform: `translateY(${top}px)`}}
    >
      <div
        ref={element}
        className="0">0</div>
      <div className="1">1</div>
      <div className="2">2</div>
      <div className="3">3</div>
      <div className="4">4</div>
      <div className="5">5</div>
      <div className="6">6</div>
      <div className="7">7</div>
      <div className="8">8</div>
      <div className="9">9</div>
    </div>
  )
}

function App() {
  const END_D_DAY = DateTime.fromObject({ year: 2024, month: 2, day: 27 });
  const [d_day, setDDay] = useState({
    days: 0, hours: 0, minutes: 0, second: 0, asSecond : 0
  })

  function getNumberArray(number) {
    let result = []
    while (number > 0){
      result.push(number % 10)
      number = Math.floor(number / 10)
    }
    result.reverse()
    return result
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const duration = END_D_DAY.diff(DateTime.now(), ['days', 'hours', 'minutes', 'seconds'])

      setDDay({
        days: duration.days,
        hours: duration.hours,
        minutes: duration.minutes,
        second: Math.floor(duration.seconds),
        asSecond : Math.floor(duration.as("seconds")),
      })
    }, 500)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="App">
      {d_day.days} {d_day.hours} {d_day.days} {d_day.hours} {d_day.minutes} {d_day.second} {d_day.asSecond}
      <div className="content">
        <h1>트위치 종료까지</h1>
        <div className="d-day">
          {
            getNumberArray(d_day.asSecond).map((i, index) => (
              <Number key={index} number={i} row={index} currentTime={d_day.second}/>
            ))
          }
        </div>
        <h1>초 남았습니다.</h1>
      </div>
    </div>
  );
}

export default App;
