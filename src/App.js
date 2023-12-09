import './App.css';
import {useEffect, useState} from "react";
import moment from 'moment';

function App() {
  const END_D_DAY = moment("2024-02-27:00:00:00")
  const [d_day, setDDay] = useState({
    days : 0, hours : 0, minutes : 0, second : 0
  })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const d = END_D_DAY.diff(moment())
      const duration = moment.duration(d)

      setDDay({
        days : Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        second: duration.seconds(),
      })

      console.log(d_day)
    }, 500)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="App">
      {d_day.days}일 {d_day.hours}시간 {d_day.minutes}분 {d_day.second}초
    </div>
  );
}

export default App;
