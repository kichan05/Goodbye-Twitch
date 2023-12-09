import './App.css';
import {useEffect, useMemo, useRef, useState} from "react";
import moment from 'moment';

const Number = ({number, row}) => {
  const element = useRef()
  const [top, setTop] = useState(0)

  useEffect(() => {
    if(element.current === undefined) return
    setTop(element.current.offsetHeight * number * -1)
  }, )

  let left
  if(element.current !== undefined)
    left = element.current.offsetWidth * row

  return (
    <div className="number-wrap" style={{top, left}}>
      <div
        ref={element}
        className="0">0</div>
      <div
        className="1">1</div>
      <div
        className="2">2</div>
      <div
        className="3">3</div>
      <div
        className="4">4</div>
      <div
        className="5">5</div>
      <div
        className="6">6</div>
      <div
        className="7">7</div>
      <div
        className="8">8</div>
      <div
        className="9">9</div>
    </div>
  )
}

function App() {
  const END_D_DAY = moment("2024-02-27:00:00:00")
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
      const d = END_D_DAY.diff(moment())
      const duration = moment.duration(d)

      setDDay({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        second: duration.seconds(),
        asSecond : Math.floor(duration.asSeconds()),
      })
    }, 500)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="App">
      <div className="content">
        <h1>트위치 종료까지</h1>
        <div className="d-day">
          {
            getNumberArray(d_day.asSecond).map((i, index) => {
              return <Number key={index} number={i} row={index} is={d_day.asSecond}/>
            })
          }
        </div>
        <h1>초 남았습니다.</h1>
      </div>
    </div>
  );
}

export default App;
